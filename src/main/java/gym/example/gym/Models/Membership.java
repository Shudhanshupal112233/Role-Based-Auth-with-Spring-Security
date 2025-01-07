package gym.example.gym.Models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
@Entity //This is a description/reflection of a table
@Table(name = "Membership_details")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Membership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String packageName;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalDate renewalDate;
    @OneToOne
    private Member member;
}
