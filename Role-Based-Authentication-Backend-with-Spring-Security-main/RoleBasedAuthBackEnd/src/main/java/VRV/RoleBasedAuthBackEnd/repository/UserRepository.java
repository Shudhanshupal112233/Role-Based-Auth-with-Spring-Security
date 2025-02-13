package VRV.RoleBasedAuthBackEnd.repository;

import VRV.RoleBasedAuthBackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    //Null Kontrolü
    Optional<User> findByUsername(String username);
}
