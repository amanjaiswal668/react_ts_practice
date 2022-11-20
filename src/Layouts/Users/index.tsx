import * as React from 'react';
import CustomTable from '../../components/CustomTable';

function User() {
    const header = ["name", "age", "some", "delete"]
    const temp = (id: any) => {
        alert("Your id is :- " + id)
    }
    return (
        <>
            <CustomTable data={
                [{
                    id : 1,
                    name: "User 1",
                    age: 22,
                    some: 11
                },
                {
                    id : 2,
                    name: "User 2",
                    age: 20,
                    some: 8
                },
                ]}

                onClickView={() => { return console.log("Hello User view page"); }}
                onClickEdit={() => { return console.log("Hello User edit page"); }}
                // onClickDelete={(id : any) => { return console.log("Hello User delete page" + id); }}
                onClickDelete={(id: any) => temp(id)}
                columns={header} />
        </>
    );
}

export default User;
