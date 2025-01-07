package gym.example.gym.Services;

import gym.example.gym.Models.Member;
import gym.example.gym.Models.Membership;
import gym.example.gym.Models.Packages;
import gym.example.gym.Models.Trainer;
import gym.example.gym.Repository.MemberRepository;
import gym.example.gym.Repository.MembershipRepository;
import gym.example.gym.Repository.PackagesRepository;
import gym.example.gym.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class MemberService {
    @Autowired
    MemberRepository memberRepository;

    @Autowired
    TrainerRepository trainerRepository;

    @Autowired
    MembershipRepository membershipRepository;

    @Autowired
    PackagesRepository packagesRepository;

    public  String addmember(Member member){
         calculateBMI(member);
        Membership membership = new Membership();

        membership.setPackageName("basic package");
        membership.setStartDate(LocalDate.now());
        membership.setEndDate(LocalDate.now().plusMonths(1));
        membership.setRenewalDate(LocalDate.now().plusMonths(1));

        memberRepository.save(member);
        membershipRepository.save(membership);

        return  "member is added to gym";
    }
    public void calculateBMI(Member member) {
        double bmi = member.getWeight() / (member.getHeightInMet() * member.getHeightInMet());
        member.setBMI(bmi);
    }




    public String deletemember(int memberId){
        Member member = memberRepository.findById(memberId).get();
        memberRepository.delete(member);
        return "member has been deleted";
    }

    public  Optional<Member> byid(int memberId){
        return memberRepository.findById(memberId);

    }

    public Member updateMember(int  memberId, Member updatedMember) {
        return memberRepository.findById(memberId)
                .map(member -> {
                    member.setName(updatedMember.getName());
                    member.setAge(updatedMember.getAge());
                    member.setBranch(updatedMember.getBranch());
                    member.setMobile(updatedMember.getMobile());
                    member.setBMI(updatedMember.getBMI());
                    member.setHeightInMet(updatedMember.getHeightInMet());
                    member.setWeight(updatedMember.getWeight());

                    return memberRepository.save(member);
                })
                .orElseThrow(() -> new RuntimeException("Member not found with id " + memberId));
    }
}

