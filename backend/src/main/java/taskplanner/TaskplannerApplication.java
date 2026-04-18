package taskplanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class TaskplannerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskplannerApplication.class, args);
	}

}