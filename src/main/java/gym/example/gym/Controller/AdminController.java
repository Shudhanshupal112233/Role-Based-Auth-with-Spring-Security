package gym.example.gym.Controller;

import gym.example.gym.Models.Admin;
import gym.example.gym.Models.Member;
import gym.example.gym.Services.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController{
    @Autowired
    AdminService adminService;

    @PostMapping("/add")
    public String registerAdmin(@RequestBody Admin admin){
       String res= adminService.adminadd(admin);
       return res;
    }

    @PutMapping("/update")
    public String updatepass(@RequestParam int adminId,@RequestParam String password){
        String result =adminService.updatepass(adminId,password);
        return result;
    }

    @GetMapping("/listofmember")
    public List<Member> listOfmembers(){
        List<Member> listOfmembers=adminService.memberlist();
         return  listOfmembers;
    }




}
