package gym.example.gym.Controller;

import gym.example.gym.Models.Member;
import gym.example.gym.Repository.MemberRepository;
import gym.example.gym.Services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/member")
@RestController
@CrossOrigin("http://localhost:3000/")
public class MemberController {
    @Autowired
    MemberService memberService;

    @Autowired
    MemberRepository memberRepository;

    @PostMapping("/add")
    public String addStudent(@RequestBody Member member) {

        String result = memberService.addmember(member);
        return result;
    }

     @GetMapping("/users")
    List<Member> getallusers(){
        return  memberRepository.findAll();
     }

    @DeleteMapping("/delete/{memberId}")
      public void deletemember(@PathVariable int memberId){
        memberService.deletemember(memberId);
    }

    @GetMapping("/{memberId}")
      public ResponseEntity<Member> getbyid(@PathVariable int memberId){
          return memberService.byid(memberId).map(user -> ResponseEntity.ok(user)).orElse(ResponseEntity.notFound().build());
         }

    @PutMapping("/update/{memberId}")
    public ResponseEntity<Member> upadateMember(@PathVariable int memberId,@RequestBody Member updateMember){
        Member updated = memberService.updateMember(memberId,updateMember);
        return ResponseEntity.ok(updated);

    }



}
