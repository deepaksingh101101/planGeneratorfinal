import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBusinessPlanFromOpenAI, getSuggestionsFromOpenAI } from '../../api/openai';

export default function GeneratePlan() {
  const formData = useSelector((state) => state.form);
  const [businessPlan, setBusinessPlan] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeField, setActiveField] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchBusinessPlan = async () => {
      try {
        const generatedPlan = await getBusinessPlanFromOpenAI(formData);
        setBusinessPlan(generatedPlan);
      } catch (error) {
        console.error("Error generating business plan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessPlan();
  }, [formData]);

  const handleGenerateSuggestions = async (field) => {
    setActiveField(field);
    const generatedSuggestions = await getSuggestionsFromOpenAI(formData, field);
    setSuggestions(generatedSuggestions);
  };

  const renderPlanContent = (content) => {
    return content.split('\n').map((line, index) => {
      const cleanLine = line.replace(/^\*+|- /g, ''); // Remove any leading asterisks or hyphens
      const isTitle = cleanLine.match(/^\d+\.\s/);
      const isSubtitle = cleanLine.match(/^#{2}\s/); // Match "## " for subtitles
      const isPoint = cleanLine.match(/^#{3}\s/); // Match "### " for points
      const isWhiteText = cleanLine.match(/^#{4}\s/); // Match "#### " for white text
      const isRedText = cleanLine.match(/^#{5}\s/); // Match "##### " for red text
      const isYellowText = cleanLine.match(/^#{6}\s/); // Match "###### " for yellow text
      const isNoHashText = cleanLine.match(/^#{7}\s/); // Match "####### " for removing hashtags
      return (
        <div key={index}>
          {isTitle && <h2 className="text-2xl font-semibold mb-2 text-orange-600">{cleanLine}</h2>}
          {isSubtitle && <h3 className="text-xl font-medium mb-2 text-blue-600">{cleanLine.replace(/^#{2}\s/, '')}</h3>}
          {isPoint && <h4 className=" text-3xl font-medium mb-2 text-green-600">{cleanLine.replace(/^#{3}\s/, '')}</h4>}
          {isWhiteText && <p className="text-white text-2xl ml-4">{cleanLine.replace(/^#{4}\s/, '')}</p>}
          {isRedText && <p className="text-gray-700 font-bold text-[20px] ml-4">🔹 {cleanLine.replace(/^#{5}\s/, '')}</p>}
          {isYellowText && <p className="text-white text-[18px]  ml-4">{cleanLine.replace(/^#{6}\s/, '')}</p>}
          {isNoHashText && <p className="text-gray-700 text-2xl ml-4">{cleanLine.replace(/^#{7}\s/, '')}</p>}
          {!isTitle && !isSubtitle && !isPoint && !isWhiteText && !isRedText && !isYellowText && !isNoHashText && <p className="text-gray-700 text-2xl ml-4">{cleanLine}</p>}
        </div>
      );
    });
  };

  return (
    <div className="p-6 mt-20 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Marketing Strategy Report</h1>
        <p className="text-gray-700 mb-6">
          We've generated parts of the plan for you. To get the full plan, go to the end of the page to proceed.
        </p>
        <div className="space-y-6">
          {loading ? (
            <p className="text-gray-700">Generating your business plan, please wait...</p>
          ) : (
            renderPlanContent(businessPlan)
          )}
        </div>
        <div className="mt-8 text-center">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Proceed to Full Plan
          </button>
        </div>
      </div>
    </div>
  );
}
