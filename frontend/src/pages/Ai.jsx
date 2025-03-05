import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const Ai = () => {
  const [displayedText, setDisplayedText] = useState("");
  const geminiResults = "Studying abroad is a big undertaking, but incredibly rewarding. Here's a breakdown of how to do it, step-by-step:\n\n**1. Research and Planning:**\n\n* **Choose a Country and Institution:**  Consider your academic goals, budget, language skills, and cultural interests. Research universities and programs that align with your major and desired learning experience. Look at rankings, course offerings, faculty expertise, and student reviews.  Consider factors like visa requirements and cost of living. Websites like QS World University Rankings, Times Higher Education, and individual university websites are helpful.\n* **Determine Program Type:**\n    * **Exchange Programs:** Often coordinated through your home university, these programs are typically a semester or year long and usually involve tuition credits transferring back.\n    * **Direct Enrollment:** You apply directly to a foreign university as a regular student.  This offers more flexibility but requires more independent planning.\n    * **Study Abroad Programs:** Run by third-party organizations, these programs often offer structured support and pre-arranged courses.\n* **Define Your Budget:**  Consider tuition fees (which may differ from your home institution), accommodation costs (dorm, apartment, homestay), travel expenses (flights, visa fees, local transport), living expenses (food, entertainment, healthcare), and insurance.  Start saving early and explore funding options (see below).\n* **Check Visa Requirements:** Visa requirements vary greatly depending on your citizenship and the country you're studying in. Begin the visa application process well in advance, as it can be lengthy and complex.  Contact the embassy or consulate of the country you plan to study in.\n* **Learn the Language:**  Even if the program is taught in English, learning some of the local language will enhance your experience and immersion.\n\n**2. Application Process:**\n\n* **Meet Academic Requirements:** Ensure you meet the GPA, prerequisite courses, and language proficiency requirements of your chosen program.\n* **Gather Required Documents:**  This typically includes transcripts, letters of recommendation, personal statement, proof of financial resources, passport, and potentially standardized test scores (TOEFL, IELTS).\n* **Complete Applications:**  Follow the application instructions carefully for each program or university.  Deadlines vary, so plan accordingly.\n* **Apply for Scholarships and Funding:**  Explore scholarships and grants offered by your home university, external organizations, and the host institution.  Many scholarships are specifically designed for study abroad students.\n* **Secure Accommodation:**  Research housing options (dorm, apartment, homestay) and arrange your accommodation in advance, especially if you're studying in a popular city.\n\n**3. Pre-Departure Preparations:**\n\n* **Health and Safety:** Obtain necessary vaccinations and travel insurance.  Research local health and safety guidelines.\n* **Travel Arrangements:** Book flights and arrange transportation to your accommodation.\n* **Inform Banks and Phone Providers:**  Notify your bank and phone provider of your travel plans to avoid any issues with accessing your accounts or using your phone abroad.\n* **Pack Appropriately:**  Pack for the climate and cultural norms of your destination.  Research what to bring and what to leave behind.\n\n**4. During Your Studies Abroad:**\n\n* **Embrace the Culture:** Be open to new experiences and immerse yourself in the local culture.\n* **Network with Locals and Other Students:**  Make an effort to connect with people from different backgrounds.\n* **Manage Your Finances:** Track your spending and stick to your budget.\n* **Stay in Touch with Home:**  Maintain contact with family and friends back home.\n* **Seek Support When Needed:**  Don't hesitate to reach out to your university's study abroad office, your host institution, or other support systems if you experience any challenges.\n\n\n**5. Post-Study Abroad:**\n\n* **Reflect on Your Experience:**  Take time to process your experiences and reflect on your personal and academic growth.\n* **Share Your Story:**  Share your experiences with friends, family, and potential employers.\n* **Use Your Experience to Enhance Your Resume and Applications:**  Highlight your international experience in your resume and job applications.\n\n\nRemember to start planning well in advance.  The earlier you begin, the more time you'll have to research options, complete applications, secure funding, and prepare for your trip. Good luck!\n"

  const containerRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + geminiResults[currentIndex]);
      currentIndex++;
      if (currentIndex === geminiResults.length) {
        clearInterval(interval);
      }
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }, 1);
    return () => clearInterval(interval);
  }, [geminiResults]);

  return (
    <motion.div
      className="whitespace-pre-wrap p-4 overflow-hidden rounded-lg bg-white shadow-md border border-gray-200 h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={containerRef}
    >
      <h2 className="font-bold text-lg mb-4">MishraJi Ka AI Results</h2>
      {displayedText ? <ReactMarkdown>{displayedText}</ReactMarkdown> : <p>Loading...</p>}
    </motion.div>
  );
};

export default Ai;