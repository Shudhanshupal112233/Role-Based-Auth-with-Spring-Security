package gym.example.gym.Repository;

import gym.example.gym.Models.Membership;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembershipRepository extends JpaRepository<Membership,Integer> {
}
