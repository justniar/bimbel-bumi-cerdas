import React from "react";
import { 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Tooltip, 
  Typography 
} from "@material-tailwind/react";

interface PengajarCardProps {
  img: string;       // Image URL
  nama: string;     // nama pengajar
  spesialisasi: string;    // spesialisasi
  bergabungSejak: string;     // tanggal bergabung
}

const PengajarCard: React.FC<PengajarCardProps> = ({ img, nama, spesialisasi, bergabungSejak}) => {
  return (
    <Card placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader floated={false} className="h-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <img src={img} alt="profile-picture" className="w-full h-full object-cover"/>
      </CardHeader>
      <CardBody className="text-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {nama}
        </Typography>
        <Typography color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {spesialisasi}
        </Typography>
        <Typography color="blue-gray" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {bergabungSejak}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient 
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple" 
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default PengajarCard;
