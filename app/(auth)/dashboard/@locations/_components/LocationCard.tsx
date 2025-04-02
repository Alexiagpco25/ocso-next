import { Location } from "@/entities";
import axios from "axios";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { API_URL} from "@/constants";
import Link from "next/link";
import { authHeaders } from "@/helpers/authHeaders";

export default async function LocationCard({
  store,
}: {
  store: string | string[] | undefined;
}) {
  if (!store) return null;
  const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`, {
    headers: {
      ...authHeaders()
    },
  });
  return (
    <Card>
      <CardHeader>
        <b className="w-full text-2xl">{data.locationName}</b>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col w-full items-center">
        <p className="w-full">
          Manager:{" "}
          <Link href={{ pathname: `/dashboard/managers` }}>
            <b>{data.manager?.managerFullName}</b>
          </Link>
        </p>
        <p className="w-full">
            Direccion: <b>{data.locationAddress}</b>
        </p>
        <iframe
        className="border-2 border-orange-800 rounded-md my-2"
          width="300"
          height="200"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAmASbJF8HAq_QXRRgMHCTLzbbiCPZTYXk
    &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}>
        </iframe>
      </CardBody>
    </Card>
  );
}
