package angular.spring.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import angular.spring.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
