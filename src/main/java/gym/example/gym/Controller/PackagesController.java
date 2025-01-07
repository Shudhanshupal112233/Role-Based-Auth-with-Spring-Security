package gym.example.gym.Controller;

import gym.example.gym.Models.Member;
import gym.example.gym.Models.Packages;
import gym.example.gym.Services.PackagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("packages")
@RestController
public class PackagesController {
    @Autowired
    PackagesService packagesService;

    @PostMapping("/add")
    public String addpackage(@RequestBody Packages packages) {

        String result = packagesService.addpackage(packages);
        return result;
    }

    @GetMapping("byid")
    public Packages findpackage(@RequestParam int id) {

        return packagesService.findpackage(id);
    }

    @GetMapping("/allpackage")
    public List<Packages> getAllPackages() {
        return packagesService.getAllPackages();
    }

    @DeleteMapping("/delete")
    public void deletepackage(@RequestParam int id){
        packagesService.deletepackage(id);
    }

}
