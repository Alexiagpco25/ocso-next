import { Button, Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";

export default async function FormNewLocation(){
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers= await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization:`Bearer ${token}`
          }
    })
    const responseLocation = await axios.get(`${API_URL}/locations`,{
      headers:{
        Authorization: `Bearer ${token}`
    }
  })

    return (
        <form action={createLocation}>
          <Input required={true} label="Nombre"  name="locationName" />
          <Input required={true} label="Dirección" name="locationAddress" />
          <Input required={true} label="Latitud" name="locationLat" />
          <Input required={true} label="Longitud" name="locationLng" />
          <SelectManager managers={responseManagers.data} locations={responseLocation.data}/>
          <Button type="submit" color="primary"> Subir </Button>
        </form>
    );
}