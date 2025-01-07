package gym.example.gym.Repository;

import gym.example.gym.Models.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Integer> {
    Admin findByUsername(String username);
}
