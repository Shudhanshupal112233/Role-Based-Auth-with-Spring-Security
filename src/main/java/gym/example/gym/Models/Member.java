package gym.example.gym.Models;

import jakarta.persistence.*;
import lombok.*;

import java.security.PrivateKey;

@Entity //This is a description/reflection of a table
@Table(name = "Members")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    private String name;

    private Integer age;

    private String branch;

    private String mobile;

    private Double BMI;

    private Double heightInMet;

    private Double weight;

    @JoinColumn
    @ManyToOne
    private Trainer trainer;


    @OneToOne( mappedBy = "member", cascade = CascadeType.ALL)
    private Membership membership;
}
