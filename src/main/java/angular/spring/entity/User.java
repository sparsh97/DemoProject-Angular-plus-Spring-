package angular.spring.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
//	private String firstName;
//	private String lastName;
	private Date age;
	private String gender;
	private String email;
	private String address;
//	public User(String firstName, String lastName, Date age, String gender, String email, String address) {
//		super();
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.age = age;
//		this.gender = gender;
//		this.email = email;
//		this.address = address;
//	}
	public User() {
        this.name = "";
        this.email = "";
    }
    
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public User(String name, String email) {
		this.name = name;
		this.email = email;
	}

	public long getId() {
		return id;
	}
//	public void setId(long id) {
//		this.id = id;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
	public Date getAge() {
		return age;
	}
	public void setAge(Date age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", age=" + age + ", gender="
				+ gender + ", email=" + email + ", address=" + address + "]";
	}
	
	
}
