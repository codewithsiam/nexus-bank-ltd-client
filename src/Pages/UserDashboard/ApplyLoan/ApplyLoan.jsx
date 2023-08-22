import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
// import Swal from "sweetalert2";

const ApplyLoan = () => {
  const { handleSubmit, register, reset  } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
        data.status = "pending";
        data.email = user.email;
        const response = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/apply-loan`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Loan application submitted successfully",
                showConfirmButton: false,
                timer: 2000
              })
            reset(); 
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Loan application submission failed",
                showConfirmButton: false,
                timer: 2000
              })
        }
    } catch (error) {
        console.error("An error occurred", error);
    }
};

  return (
    <Container maxWidth="sm">
      
      <Card variant="outlined" sx={{ marginTop: 5, padding: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Apply for a Loan
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="text-black">
            <div className="relative">
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            <div className="relative mt-2">
              <input
                {...register("email")}
                type="email"
                className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                defaultValue={user?.email}
                readOnly
              />
            </div>

            <div className="relative mt-2">
              <input
                {...register("loanAmount", { required: true })}
                type="number"
                className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter loan amount"
              />
            </div>

            <div className="relative mt-2">
              <input
                {...register("loanPurpose", { required: true })}
                type="text"
                className="w-full border outline-none rounded-lg border-white bg-base p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter loan purpose"
              />
            </div>

            <Button type="submit" variant="contained" sx={{ marginTop: 3 }}>
              Apply for Loan
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ApplyLoan;
