import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

export default class EmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: {},
            department: {},
            organization: {}
        };
    }

    componentDidMount() {
        EmployeeService.getEmployee().then((response) => {
            this.setState({
                employee: response.data.employee,
                department: response.data.department,
                organization: response.data.organization
            });

            console.log(this.state.employee);
            console.log(this.state.department);
            console.log(this.state.organization);
        });
    }

    render() {
        const containerStyle = {
            margin: '20px auto',
            maxWidth: '800px'
        };

        const cardStyle = {
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
        };

        const headerStyle = {
            textAlign: 'center',
            marginBottom: '20px',
            color: '#333'
        };

        const tableStyle = {
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px'
        };

        const thStyle = {
            padding: '10px',
            border: '1px solid #ddd',
            backgroundColor: '#f9f9f9',
            textAlign: 'left'
        };

        const tdStyle = {
            padding: '10px',
            border: '1px solid #ddd',
            textAlign: 'left'
        };

        return (
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <h3 style={headerStyle}>View Employee Details</h3>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <th style={thStyle}>First Name</th>
                                <td style={tdStyle}>{this.state.employee.firstName}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Last Name</th>
                                <td style={tdStyle}>{this.state.employee.lastName}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Email</th>
                                <td style={tdStyle}>{this.state.employee.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={cardStyle}>
                    <h3 style={headerStyle}>View Department Details</h3>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <th style={thStyle}>Department Name</th>
                                <td style={tdStyle}>{this.state.department.departmentName}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Department Description</th>
                                <td style={tdStyle}>{this.state.department.departmentDescription}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Department Code</th>
                                <td style={tdStyle}>{this.state.department.departmentCode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={cardStyle}>
                    <h3 style={headerStyle}>View Organization Details</h3>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <th style={thStyle}>Organization Name</th>
                                <td style={tdStyle}>{this.state.organization.organizationName}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Organization Description</th>
                                <td style={tdStyle}>{this.state.organization.organizationDescription}</td>
                            </tr>
                            <tr>
                                <th style={thStyle}>Organization Code</th>
                                <td style={tdStyle}>{this.state.organization.organizationCode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
