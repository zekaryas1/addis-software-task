import React, {useEffect, useState} from "react";
import '../App.css';
import {useNavigate} from "react-router-dom";
import {Employee} from "../models/Employee";
import {API} from "../config/API";
import {useDispatch} from "react-redux";
import SET_CURRENT_EMPLOYEE from "../redux/Action";
import {Button, Container, EmployeeCardAction, Img, MutedP, SubContainerCard} from "../config/MyStyledComponents";

export default function EmployeeList() {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<Employee[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(API.URL + "/employees").then(value => value.json()).then(value => {
            setEmployee(value);
        })
    }, []);

    const goToAdd = (id: string) => {
        navigate("edit/manage");
    }


    const onDeleteClick = (employeeId: string) => {
        if (window.confirm("Are you sure you want to delete")) {
            fetch(`${API.URL}/employees/${employeeId}`, {
                method: 'DELETE',
            }).then(value => {
                const newEmployeeList = employee.filter(value => value._id != employeeId);
                setEmployee(newEmployeeList);
            })
        }
    }


    return <>
        <div className="add-new">
            <Button ml={0} danger={false} onClick={() => {
                dispatch(SET_CURRENT_EMPLOYEE({
                    _id: "",
                    name: "",
                    gender: "unknown",
                    salary: 0,
                    dateOfBirth: (new Date())
                }));
                goToAdd("new")
            }}>Add new Employee
            </Button>
        </div>
        <Container>
            {employee.map(e => {
                return <SubContainerCard center={false} key={e._id}>
                    <Img src={"https://avatars.dicebear.com/api/miniavs/" + e.name + ".svg"} alt=""/>
                    <h2>{e.name}</h2>
                    <hr color="#c3c8d1a6"/>
                    <MutedP size={1} center={false}>Gender: {e.gender}</MutedP>
                    <MutedP size={1} center={false}>Salary: {e.salary}</MutedP>
                    <MutedP size={1} center={false}>DOB: {new Date(e.dateOfBirth).toLocaleDateString()}</MutedP>
                    <EmployeeCardAction>
                        <Button ml={0} danger={false} onClick={() => {
                            dispatch(SET_CURRENT_EMPLOYEE(e));
                            goToAdd(e._id)
                        }}>Edit
                        </Button>
                        <Button ml={8} danger={true} onClick={() => onDeleteClick(e._id)}>Delete</Button>
                    </EmployeeCardAction>
                </SubContainerCard>
            })}
        </Container>
    </>
}