import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css"; // keep this

import entDoctor3 from "../assets/entDoctor3.jpg"; 
import entDoctor2 from "../assets/entDoctor2.png"; 
import entDoctor1 from "../assets/entDoctor1.png"; 
import cardiologydoctor2 from "../assets/cardiologydoctor2.png"; 
import cardiologydoctor3 from "../assets/cardiologydoctor3.png"; 
import Neurlogy1 from "../assets/Neurology1.png"; 


const doctorsData = {
  ENT: [
    {
      id: 1,
      firstName: "Dr. Jaswant Singh",
      email: "jaswant.singh@example.com",
      qualifications: "MBBS, MS (ENT)",
      hospitalName: "City Care Hospital",
      hospitalLocation: "New York",
      hospitalNumber: "+1-234-567-890",
      description: "Experienced ENT specialist focusing on minimally invasive treatments.",
      rating: 4.5,
      imageUrl: entDoctor1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Vishal",
      email: "vishal@example.com",
      qualifications: "MBBS, DLO",
      hospitalName: "Sunrise Clinic",
      hospitalLocation: "Los Angeles",
      hospitalNumber: "+1-987-654-321",
      description: "Expert in head and neck surgeries with over 10 years of practice.",
      rating: 4.2,
      imageUrl: entDoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Kshitij Bhatnagar",
      email: "kshitij.bhatnagar@example.com",
      qualifications: "MBBS, MS (ENT), Fellow in Endoscopic Sinus Surgery",
      hospitalName: "Global ENT Care",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9876543210",
      description: "Senior Consultant with 12+ years of expertise in ENT surgeries and treatments.",
      rating: 4.9,
      imageUrl: entDoctor3,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],
  
  
  Cardiology: [
    {
      id: 1,
      firstName: "Dr. Aarav Sharma",
      email: "aarav.sharma@example.com",
      qualifications: "MBBS, MD (Cardiology)",
      hospitalName: "Apollo Heart Institute",
      hospitalLocation: "Mumbai",
      hospitalNumber: "+91-9123456780",
      description: "Heart specialist focusing on preventive cardiology and vascular care.",
      rating: 4.8,
      imageUrl: cardiologydoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Meera Kapoor",
      email: "meera.kapoor@example.com",
      qualifications: "MBBS, DM (Cardiology)",
      hospitalName: "Fortis Escorts Heart Institute",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9876543211",
      description: "Experienced in interventional cardiology with 10+ years of practice.",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Rohan Verma",
      email: "rohan.verma@example.com",
      qualifications: "MBBS, MD (Internal Medicine), DM (Cardiology)",
      hospitalName: "Max Healthcare",
      hospitalLocation: "Gurgaon",
      hospitalNumber: "+91-9988776655",
      description: "Specialist in heart failure management and cardiac rehabilitation.",
      rating: 4.6,
      imageUrl: cardiologydoctor3,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  Neurology: [
    {
      id: 1,
      firstName: "Dr. Priya Nair",
      email: "priya.nair@example.com",
      qualifications: "MBBS, MD, DM (Neurology)",
      hospitalName: "NIMHANS",
      hospitalLocation: "Bangalore",
      hospitalNumber: "+91-9345671234",
      description: "Expert in neurodegenerative disorders and stroke management.",
      rating: 4.7,
      imageUrl: Neurlogy1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Aniket Iyer",
      email: "aniket.iyer@example.com",
      qualifications: "MBBS, MD, DM (Neurology)",
      hospitalName: "KIMS Hospital",
      hospitalLocation: "Hyderabad",
      hospitalNumber: "+91-9012345678",
      description: "Specializes in epilepsy treatment and neuromuscular disorders.",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Divya Patel",
      email: "divya.patel@example.com",
      qualifications: "MBBS, MD, DM (Neurology)",
      hospitalName: "Medanta The Medicity",
      hospitalLocation: "Gurgaon",
      hospitalNumber: "+91-9876541230",
      description: "Dedicated to treating multiple sclerosis and migraines.",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  Dermatology: [
    {
      id: 1,
      firstName: "Dr. Ishaan Malhotra",
      email: "ishaan.malhotra@example.com",
      qualifications: "MBBS, MD (Dermatology)",
      hospitalName: "Oliva Skin & Hair Clinic",
      hospitalLocation: "Chennai",
      hospitalNumber: "+91-9876543212",
      description: "Expert in laser treatments, acne, and cosmetic dermatology.",
      rating: 4.6,
      imageUrl: cardiologydoctor3,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Neha Reddy",
      email: "neha.reddy@example.com",
      qualifications: "MBBS, MD (Dermatology)",
      hospitalName: "Cutis Clinic",
      hospitalLocation: "Hyderabad",
      hospitalNumber: "+91-9988776651",
      description: "Specialist in skin allergy treatments and cosmetic procedures.",
      rating: 4.4,
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Arjun Deshmukh",
      email: "arjun.deshmukh@example.com",
      qualifications: "MBBS, MD (Dermatology)",
      hospitalName: "Dermacare Clinic",
      hospitalLocation: "Pune",
      hospitalNumber: "+91-9123456789",
      description: "Focused on hair restoration and skin rejuvenation therapies.",
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  Orthopedics: [
    {
      id: 1,
      firstName: "Dr. Vikram Joshi",
      email: "vikram.joshi@example.com",
      qualifications: "MBBS, MS (Orthopedics)",
      hospitalName: "Sancheti Hospital",
      hospitalLocation: "Pune",
      hospitalNumber: "+91-9999988888",
      description: "Specialist in joint replacements and arthroscopy.",
      rating: 4.8,
      imageUrl: cardiologydoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Sneha Menon",
      email: "sneha.menon@example.com",
      qualifications: "MBBS, MS (Orthopedics)",
      hospitalName: "Apollo Hospitals",
      hospitalLocation: "Bangalore",
      hospitalNumber: "+91-9876512345",
      description: "Specializes in pediatric orthopedics and sports injuries.",
      rating: 4.5,
      imageUrl: Neurlogy1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Karan Bhatia",
      email: "karan.bhatia@example.com",
      qualifications: "MBBS, MS (Orthopedics)",
      hospitalName: "Medanta Hospital",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9812345678",
      description: "Focused on spinal surgeries and trauma care.",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  Pediatrics: [
    {
      id: 1,
      firstName: "Dr. Riya Sengupta",
      email: "riya.sengupta@example.com",
      qualifications: "MBBS, MD (Pediatrics)",
      hospitalName: "Rainbow Children's Hospital",
      hospitalLocation: "Hyderabad",
      hospitalNumber: "+91-9876543215",
      description: "Pediatrician specializing in immunizations and newborn care.",
      rating: 4.7,
      imageUrl: Neurlogy1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Manav Desai",
      email: "manav.desai@example.com",
      qualifications: "MBBS, MD (Pediatrics)",
      hospitalName: "Apollo Cradle",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9876543298",
      description: "Expert in child nutrition and adolescent health care.",
      rating: 4.6,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 3,
      firstName: "Dr. Shruti Pillai",
      email: "shruti.pillai@example.com",
      qualifications: "MBBS, MD (Pediatrics)",
      hospitalName: "Cloudnine Hospitals",
      hospitalLocation: "Bangalore",
      hospitalNumber: "+91-9988776622",
      description: "Focused on child respiratory and growth disorders.",
      rating: 4.5,
      imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&h=400&w=400",
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  Psychiatry: [
    {
      id: 1,
      firstName: "Dr. Emily Roberts",
      email: "emily.roberts@example.com",
      qualifications: "MBBS, MD (Psychiatry)",
      hospitalName: "Mind Care Clinic",
      hospitalLocation: "Chicago",
      hospitalNumber: "+1-312-345-6789",
      description: "Experienced psychiatrist with a focus on mood disorders and stress management.",
      rating: 4.8,
      imageUrl: entDoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Michael Lee",
      email: "michael.lee@example.com",
      qualifications: "MBBS, MD (Psychiatry)",
      hospitalName: "Healing Minds Hospital",
      hospitalLocation: "San Francisco",
      hospitalNumber: "+1-415-567-1234",
      description: "Specializing in anxiety and depression with over 15 years of experience.",
      rating: 4.3,
      imageUrl: cardiologydoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],
  Oncology: [
    {
      id: 1,
      firstName: "Dr. Ravi Kumar",
      email: "ravi.kumar@example.com",
      qualifications: "MBBS, MD (Oncology)",
      hospitalName: "Cancer Care Center",
      hospitalLocation: "Chennai",
      hospitalNumber: "+91-9912345678",
      description: "Specialist in cancer treatment with a focus on chemotherapy and radiation therapy.",
      rating: 4.7,
      imageUrl: entDoctor3,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Ayesha Verma",
      email: "ayesha.verma@example.com",
      qualifications: "MBBS, DM (Oncology)",
      hospitalName: "Tata Memorial Hospital",
      hospitalLocation: "Mumbai",
      hospitalNumber: "+91-9988776655",
      description: "Expert in medical oncology and cancer immunotherapy.",
      rating: 4.9,
      imageUrl: Neurlogy1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],
  Radiology: [
    {
      id: 1,
      firstName: "Dr. Shruti Mehta",
      email: "shruti.mehta@example.com",
      qualifications: "MBBS, MD (Radiology)",
      hospitalName: "Radiology Institute",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9876541234",
      description: "Experienced radiologist specializing in CT and MRI imaging.",
      rating: 4.6,
      imageUrl: Neurlogy1,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
    {
      id: 2,
      firstName: "Dr. Rajeev Patel",
      email: "rajeeve.patel@example.com",
      qualifications: "MBBS, MD (Radiology)",
      hospitalName: "AIIMS",
      hospitalLocation: "Delhi",
      hospitalNumber: "+91-9765432109",
      description: "Specializing in diagnostic radiology and imaging technology.",
      rating: 4.8,
      imageUrl: entDoctor2,
      profileLink: "https://doctoraibot-wlhdqfpsft67gapp6pb7uvn.streamlit.app/",
    },
  ],

  
  // similarly I can continue for Psychiatry, Oncology, Radiology if you want!
};


const DoctorList = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { department } = location.state || {};
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (department) {
      const matchingDepartment = Object.keys(doctorsData).find(
        (key) => key.toLowerCase() === department.toLowerCase()
      );
      if (matchingDepartment) {
        setDoctors(doctorsData[matchingDepartment]);
      } else {
        setDoctors([]);
      }
    }
  }, [department]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
        Doctors for {department}
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg">
            No doctors available for this department.
          </div>
        )}
      </div>

      <button
        className="mt-12 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
        onClick={() => navigate("/departments")}
      >
        Back to Departments
      </button>
    </div>
  );
};

const DoctorCard = ({ doctor }) => {
  const openProfile = () => {
    window.open(doctor.profileLink, "_blank");
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push("★");
    }
    if (halfStar) {
      stars.push("☆");
    }
    return stars.join(" ");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="flex flex-col items-center">
        <img
          src={doctor.imageUrl}
          alt={doctor.firstName}
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-400 mb-2">{doctor.firstName}</h2>
        <div className="text-yellow-400 text-lg">{renderStars(doctor.rating)}</div>
        <span className="text-sm text-gray-400 mt-1">({doctor.rating} Rating)</span>
      </div>

      <div className="mt-6 flex-1 flex flex-col gap-2 text-gray-300 text-sm">
        <p><span className="font-semibold text-white">Email:</span> {doctor.email}</p>
        <p><span className="font-semibold text-white">Qualifications:</span> {doctor.qualifications}</p>
        <p><span className="font-semibold text-white">Hospital:</span> {doctor.hospitalName}, {doctor.hospitalLocation}</p>
        <p><span className="font-semibold text-white">Contact:</span> {doctor.hospitalNumber}</p>
      </div>

      <p className="mt-4 text-gray-400 text-sm italic">"{doctor.description}"</p>

      <div className="mt-6">
        <button
          onClick={openProfile}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorList;
