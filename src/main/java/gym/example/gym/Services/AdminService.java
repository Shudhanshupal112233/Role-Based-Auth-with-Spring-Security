package gym.example.gym.Services;

import gym.example.gym.Models.Admin;
import gym.example.gym.Models.Member;
import gym.example.gym.Repository.AdminRepository;
import gym.example.gym.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.plaf.PanelUI;
import java.util.List;

@Service
public class AdminService {
    @Autowired
    AdminRepository adminRepository;

    @Autowired
    MemberRepository memberRepository;
    public String adminadd(Admin admin) {
        //Save the admin in the database
        adminRepository.save(admin);
        return "admin saved";
    }

    public String updatepass(int adminId,String password){
        Admin admin = adminRepository.findById(adminId).get();
        admin.setPassword(password);
        adminRepository.save(admin);
        return "password updated successfully";
    }

    public List<Member> memberlist(){
        List<Member> listOfmembers =  memberRepository.findAll();
        return  listOfmembers;
    }

}
