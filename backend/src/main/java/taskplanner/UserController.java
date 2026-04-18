package taskplanner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/taskplanner")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
}
