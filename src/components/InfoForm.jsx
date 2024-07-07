import React, { useState } from "react";

const InfoForm = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   dateOfBirth: '',
  //   placeOfBirth: '',
  //   township: '',
  //   localGovtArea: '',
  //   villageOfParents: '',
  //   schoolAttended: '',
  //   parentsNameAddress: '',
  //   parentsOccupation: '',
  //   parentsCompound: '',
  //   correspondenceAddress: '',
  //   phoneNumber1: '',
  //   phoneNumber2: '',
  //   qualifications: '',
  //   oLevelResult: '',
  //   admissionLetter: '',
  //   academicResults: '',
  //   certificateOfOrigin: '',
  //   birthCertificate: '',
  //   financialAssistance: '',
  //   courseFinanced: '',
  //   valueAndSource: '',
  //   referee1: { name: '', address: '' },
  //   referee2: { name: '', address: '' },
  //   referee3: { name: '', address: '' },
  //   studentSignature: '',
  //   traditionalChiefRecommendation: '',
  //   departmentHeadCertification: '',
  //   officialUseOnly: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission (e.g., send data to backend)
  //   console.log(formData);
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <iframe
        title="Google Map"
        src="https://docs.google.com/forms/d/e/1FAIpQLScBW7bSkVwfkhru47wCTtLsPgiPZdqmeeZQH18cIO5IqbDnfA/viewform?usp=sf_link"
      
        width="100%"
        
        className="border-0 h-[600px]"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    
  );
};

export default InfoForm;

//       <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md space-y-4">
//         <h2 className="text-2xl font-bold mb-4">Application Form</h2>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             1. Name in full: Mr/Mrs/Miss (Surname first, Maiden Name, and First Name)
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         {/* Repeat similar blocks for each form field */}

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">
//             2. Date of Birth:
//           </label>
//           <input
//             id="dateOfBirth"
//             name="dateOfBirth"
//             type="date"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="placeOfBirth">
//             3. Place of Birth:
//           </label>
//           <input
//             id="placeOfBirth"
//             name="placeOfBirth"
//             type="text"
//             value={formData.placeOfBirth}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="township">
//             4. (a) Township of origin in Abeokuta:
//           </label>
//           <input
//             id="township"
//             name="township"
//             type="text"
//             value={formData.township}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="localGovtArea">
//             (b) Local Government Area in Egba land:
//           </label>
//           <input
//             id="localGovtArea"
//             name="localGovtArea"
//             type="text"
//             value={formData.localGovtArea}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="villageOfParents">
//             (c) Village of Parents in Egba land:
//           </label>
//           <input
//             id="villageOfParents"
//             name="villageOfParents"
//             type="text"
//             value={formData.villageOfParents}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="schoolAttended">
//             5. School Attended:
//           </label>
//           <input
//             id="schoolAttended"
//             name="schoolAttended"
//             type="text"
//             value={formData.schoolAttended}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="parentsNameAddress">
//             6. Name and Address of Parents:
//           </label>
//           <textarea
//             id="parentsNameAddress"
//             name="parentsNameAddress"
//             value={formData.parentsNameAddress}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="parentsOccupation">
//             7. Occupation of your Parents:
//           </label>
//           <input
//             id="parentsOccupation"
//             name="parentsOccupation"
//             type="text"
//             value={formData.parentsOccupation}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="parentsCompound">
//             8. Parent's family compound in Egba land:
//           </label>
//           <input
//             id="parentsCompound"
//             name="parentsCompound"
//             type="text"
//             value={formData.parentsCompound}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="correspondenceAddress">
//             9. Address to which correspondence should be sent:
//           </label>
//           <textarea
//             id="correspondenceAddress"
//             name="correspondenceAddress"
//             value={formData.correspondenceAddress}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber1">
//             10. Applicant's Phone Number: (1)
//           </label>
//           <input
//             id="phoneNumber1"
//             name="phoneNumber1"
//             type="text"
//             value={formData.phoneNumber1}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber2">
//             Applicant's Phone Number: (2)
//           </label>
//           <input
//             id="phoneNumber2"
//             name="phoneNumber2"
//             type="text"
//             value={formData.phoneNumber2}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="qualifications">
//             11. State educational qualification and distinctions obtained:
//           </label>
//           <textarea
//             id="qualifications"
//             name="qualifications"
//             value={formData.qualifications}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>
//  {/* section B field */}
//         <h3 className="text-lg font-bold mb-4">12. Please attach the photocopy of the following documents:</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="oLevelResult">
//             (a) Your OLevel Result WAEC/NECO/GCE
//           </label>
//           <input
//             id="oLevelResult"
//             name="oLevelResult"
//             type="file"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="admissionLetter">
//             (b) Your Institution Admission letter
//           </label>
//           <input
//             id="admissionLetter"
//             name="admissionLetter"
//             type="file"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="academicResults">
//             (c) Your Current Academic Results
//           </label>
//           <input
//             id="academicResults"
//             name="academicResults"
//             type="file"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="certificateOfOrigin">
//             (d) Your Certificate of Origin in Egbaland
//           </label>
//           <input
//             id="certificateOfOrigin"
//             name="certificateOfOrigin"
//             type="file"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="birthCertificate">
//             (e) Your Certificate of Birth
//           </label>
//           <input
//             id="birthCertificate"
//             name="birthCertificate"
//             type="file"
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="financialAssistance">
//             13. Are you enjoying any financial assistance:
//           </label>
//           <textarea
//             id="financialAssistance"
//             name="financialAssistance"
//             value={formData.financialAssistance}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="courseFinanced">
//             14. How is your course financed now?
//           </label>
//           <textarea
//             id="courseFinanced"
//             name="courseFinanced"
//             value={formData.courseFinanced}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="valueAndSource">
//             15. State value and source:
//           </label>
//           <textarea
//             id="valueAndSource"
//             name="valueAndSource"
//             value={formData.valueAndSource}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <h3 className="text-lg font-bold mb-4">16. Name and address of referees, two of whom must have taught you at secondary or post-secondary level:</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee1">
//             (a) Name
//           </label>
//           <input
//             id="referee1"
//             name="referee1.name"
//             type="text"
//             value={formData.referee1.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee1Address">
//             Address:
//           </label>
//           <textarea
//             id="referee1Address"
//             name="referee1.address"
//             value={formData.referee1.address}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee2">
//             (b) Name
//           </label>
//           <input
//             id="referee2"
//             name="referee2.name"
//             type="text"
//             value={formData.referee2.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee2Address">
//             Address:
//           </label>
//           <textarea
//             id="referee2Address"
//             name="referee2.address"
//             value={formData.referee2.address}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee3">
//             (c) Name
//           </label>
//           <input
//             id="referee3"
//             name="referee3.name"
//             type="text"
//             value={formData.referee3.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="referee3Address">
//             Address:
//           </label>
//           <textarea
//             id="referee3Address"
//             name="referee3.address"
//             value={formData.referee3.address}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="studentSignature">
//             17. Signature of student and date:
//           </label>
//           <input
//             id="studentSignature"
//             name="studentSignature"
//             type="text"
//             value={formData.studentSignature}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>
//  {/* Section C form field */}
//         <h3 className="text-lg font-bold mb-4">SECTION C</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="screening">
//             Screening
//           </label>
//           <input
//             id="screening"
//             name="screening"
//             type="text"
//             value={formData.screening}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="interview">
//             Interview
//           </label>
//           <input
//             id="interview"
//             name="interview"
//             type="text"
//             value={formData.interview}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="traditionalChiefRecommendation">
//             18. Recommendation from the traditional Chief of the applicant's area in Egbaland:
//           </label>
//           <textarea
//             id="traditionalChiefRecommendation"
//             name="traditionalChiefRecommendation"
//             value={formData.traditionalChiefRecommendation}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <h3 className="text-lg font-bold mb-4">Final Selection</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="recommendation">
//             Recommendation
//           </label>
//           <textarea
//             id="recommendation"
//             name="recommendation"
//             value={formData.recommendation}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <h3 className="text-lg font-bold mb-4">19. To be completed by Head of Department or his designated representative.</h3>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="departmentHeadCertification">
//             Hereby certify that the information given by the applicant in sections A and B of this form is, to the best of my knowledge, Correct/Incorrect.
//           </label>
//           <input
//             id="departmentHeadCertification"
//             name="departmentHeadCertification"
//             type="text"
//             value={formData.departmentHeadCertification}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="officialUseOnly">
//             FOR OFFICIAL USE ONLY
//           </label>
//           <textarea
//             id="officialUseOnly"
//             name="officialUseOnly"
//             value={formData.officialUseOnly}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg h-20"
//           ></textarea>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="signatureTitle">
//             Signature and Title
//           </label>
//           <input
//             id="signatureTitle"
//             name="signatureTitle"
//             type="text"
//             value={formData.signatureTitle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="decisionSignature">
//             Decision Signature
//           </label>
//           <input
//             id="decisionSignature"
//             name="decisionSignature"
//             type="text"
//             value={formData.decisionSignature}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg"
//           />
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
//       </form>
