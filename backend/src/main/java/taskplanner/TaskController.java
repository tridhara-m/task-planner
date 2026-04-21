package taskplanner;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/taskplanner")
public class TaskController {

	private final TaskRepository taskRepository;
	public TaskController(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	
	@GetMapping("/tasks")
	public List<Task> getAllTasks(){
		return taskRepository.findAll();
	}
	
	@PostMapping("/createTask")
	public Task createTask(@RequestBody Task task) {
		return taskRepository.save(task);
	}
	
	@PutMapping("/{id}/complete")
	public Task toggleTaskCompletion(@PathVariable Long id) {
		Task task = taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
		task.setCompleted(!task.getCompleted());
		return taskRepository.save(task);
	}
	
	@DeleteMapping("/{id}/delete")
	public void deleteTask(@PathVariable Long id) {
		taskRepository.deleteById(id);
	}
}
