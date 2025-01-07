package gym.example.gym.Models;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Entity //This is a description/reflection of a table
@Table(name = "Trainer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Trainer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer TrainerId;

    private String name;

    private Integer age;

    private  String mobile;

    @OneToMany(mappedBy = "trainer",cascade = CascadeType.ALL)
    List<Member> memberList = new ArrayList<>();
}
