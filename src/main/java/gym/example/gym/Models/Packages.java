package gym.example.gym.Models;

import jakarta.persistence.*;
import lombok.*;

@Entity //This is a description/reflection of a table
@Table(name = "Packages")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Packages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String duration; // e.g., "Monthly", "Yearly"
    private double price;
    private String description;
}

//    Monthly Package:
//    java
//    private String description = "Unlimited access to gym facilities, 4 personal training sessions, and free fitness assessment.";
//
//    Yearly Package:
//    java
//    private String description = "All-inclusive yearly membership with unlimited access, 12 personal training sessions, and a free nutrition consultation.";
//
//    Family Package:
//    java
//    private String description = "Family membership for up to four members, including access to all facilities and group classes.";
//
