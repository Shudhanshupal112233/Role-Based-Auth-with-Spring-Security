package gym.example.gym.Repository;

import gym.example.gym.Models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainerRepository extends JpaRepository<Trainer ,Integer> {
}
