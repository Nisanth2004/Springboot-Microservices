package com.nisanth.employeeservice.service;

import com.nisanth.employeeservice.dto.APIResponseDto;
import com.nisanth.employeeservice.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto saveEmployee(EmployeeDto employeeDto);

   //APIResponseDto getEmployeeById(Long employeeId);
   APIResponseDto getEmployeeById(Long employeeId);
}
