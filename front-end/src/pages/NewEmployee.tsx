import React, {FormEvent, useState} from 'react';
import '../App.css';
import {Employee} from "../models/Employee";
import {API} from "../config/API";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Card, Input, Select, SubmitButton} from '../config/MyStyledComponents';

export default function NewEmployee() {
    const navigate = useNavigate();
    const employee = useSelector((state: any) => state.employee);

    const [newEmployee, setNewEmployee] = useState<Employee>(employee);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newEmployee._id) {
            sendUpdateEmployeeRequest();
        } else {
            sendAddEmployeeRequest();
        }
    }

    const sendUpdateEmployeeRequest = () => {
        fetch(API.URL + "/employees/" + newEmployee._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        }).then(response => {
            navigate(-1);
        })
    }

    const sendAddEmployeeRequest = () => {

        fetch(API.URL + "/employees", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmployee)
        }).then(response => {
            navigate(-1);
        })
    }

    const updateState = (name: string, newValue: any) => {
        switch (name) {
            case "name":
                setNewEmployee({
                    ...newEmployee,
                    name: newValue
                })
                break
            case "salary":
                setNewEmployee({
                    ...newEmployee,
                    salary: newValue
                })
                break
            case "gender":
                setNewEmployee({
                    ...newEmployee,
                    gender: newValue
                })
                break
            case "dateOfBirth":
                setNewEmployee({
                    ...newEmployee,
                    dateOfBirth: newValue
                })
                break
        }
    }

    return <>
        <Card center={true}>
            <h2> {newEmployee._id ? "Edit" : "Add new"} employee</h2>
            <hr color="#c3c8d1a6"/>
            <form className="new-employee-form" onSubmit={onFormSubmit}>
                <Input type="text" name="name" value={newEmployee.name}
                       onChange={event => updateState(event.target.name, event.target.value)}
                       placeholder="employee name" required/>
                <Input type="number" name="salary" value={newEmployee.salary}
                       onChange={event => updateState(event.target.name, event.target.value)} placeholder="salary"
                       required/>
                <Select value={newEmployee.gender} name="gender"
                        onChange={event => updateState(event.target.name, event.target.value)} required>
                    <option value="unknown" disabled>please select a gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </Select>
                <Input type="date" name="dateOfBirth"
                       value={new Date(newEmployee.dateOfBirth).toISOString().substr(0, 10)}
                       onChange={event => updateState(event.target.name, event.target.value)}
                       placeholder="date or birth" required/>
                <SubmitButton type="submit" className="button" placeholder="Add"/>
            </form>
        </Card>
    </>;
}