package gym.example.gym.Services;

import gym.example.gym.Models.Member;
import gym.example.gym.Models.Trainer;
import gym.example.gym.Repository.MemberRepository;
import gym.example.gym.Repository.TrainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrainerService {
   @Autowired
    TrainerRepository trainerRepository;

   @Autowired
    MemberRepository memberRepository;

    public  String addtrainer(Trainer trainer){

        trainerRepository.save(trainer);


        return  " trainer is added to gym";
    }
}
