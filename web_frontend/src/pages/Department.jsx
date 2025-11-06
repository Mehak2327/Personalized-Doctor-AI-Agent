import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 

const departments = [
  { name: 'Cardiology', description: 'Heart & vascular consultations.' },
  { name: 'Neurology', description: 'Brain and nervous system care.' },
  { name: 'Dermatology', description: 'Skin-related treatments.' },
  { name: 'Orthopedics', description: 'Bones, joints, and muscles.' },
  { name: 'Pediatrics', description: 'Child healthcare services.' },
  { name: 'Psychiatry', description: 'Mental health and counseling.' },
  { name: 'Oncology', description: 'Cancer diagnosis and treatment.' },
  { name: 'Radiology', description: 'Medical imaging services.' },
  { name: 'ENT', description: 'Ear, Nose, and Throat specialists.' },
];

const Departments = () => {
  const navigate = useNavigate();

 
  const handleDepartmentSelect = (deptName) => {
    navigate('/doctor-list', { state: { department: deptName } }); 
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">Choose Your Medical Department</h1>
      <p className="text-gray-400 mb-12 text-center text-lg">Select the field you want to consult with</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 pb-12 w-full max-w-6xl">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
            onClick={() => handleDepartmentSelect(dept.name)} 
          >
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{dept.name}</h2>
            <p className="text-gray-300">{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
