package gym.example.gym.Services;

import gym.example.gym.Models.Packages;
import gym.example.gym.Repository.PackagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackagesService {
    @Autowired
   PackagesRepository packagesRepository;
     public String addpackage(Packages pkg) {
        packagesRepository.save(pkg);
        return "package is added";
    }

    public  Packages findpackage(int id) {
        return packagesRepository.findById(id).get();
    }

    public List<Packages> getAllPackages() {
        return packagesRepository.findAll();
    }

    public void deletepackage(int id){
         packagesRepository.deleteById(id);
    }
}
