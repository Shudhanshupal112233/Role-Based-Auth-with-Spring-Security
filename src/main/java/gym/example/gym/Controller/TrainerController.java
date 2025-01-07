package gym.example.gym.Controller;

import gym.example.gym.Models.Member;
import gym.example.gym.Models.Trainer;
import gym.example.gym.Services.MemberService;
import gym.example.gym.Services.TrainerService;
import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RequestMapping("trainer")
@RestController
public class TrainerController {

    @Autowired
    TrainerService trainerService;

    @PostMapping("/add")
    public String addtariner(@RequestBody Trainer trainer) {

        String result = trainerService.addtrainer(trainer);
        return result;
    }
//
//    @DeleteMapping("/delete")
//    public void deletemember(@RequestParam int trainerId){
//        trainerService.deletemember(trainerId);
//    }






}
