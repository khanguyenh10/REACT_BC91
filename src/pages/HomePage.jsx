import React from 'react'
import Header from '../components/Header'
import Model from '../components/Model'
import GlassList from '../components/GlassList'
import dataGlasses from "../dataGlasses.json";
const HomePage = () => {
  const [selectedGlass, setSelectedGlass] = React.useState(dataGlasses[0]);

  const handleChooseGlass = (glass) => {
    setSelectedGlass(glass);
  };
  return (
    <>
      <Header />
      <main style={{ height: 1000 }}>
        <div className="container">
          <Model selectedGlass={selectedGlass} />
          <GlassList data={dataGlasses} selectedGlass={selectedGlass} onChooseGlass={handleChooseGlass} />
        </div>
      </main>
    </>
  )
}

export default HomePage