import './emulator.css';
import { useState } from 'react';
import ToolArea
 from '../../components/templates/toolArea/toolArea';
const Emulator = () => {

  type Tool = {
    id: string;
    label: string;
  }

  const tools : Tool[] = [
    {
      id: 'ynoracle',
      label: 'Yes/No Oracle'
    },
    {
      id: 'nvtable',
      label: 'Noun/Verb Table'
    },
    {
      id: 'diceroller',
      label: 'Dice Roller'
    }
  ]

  const [selectedTool, setSelectedTool] = useState(tools[0]);

  const handleToolClick = (id : string) : void => {
    const clickedTool = tools.filter((tool) => {
      return tool.id === id;
    });
    setSelectedTool(clickedTool[0]);
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>GM Emulator</h1>
      </header>
      <div className="content">
        <aside className="sidebar">
          <h2>Tools</h2>
          <ul>
            {
              tools.map((tool) => {
                return(<li><a onClick={() => handleToolClick(tool.id)}>{tool.label}</a></li>);
              })
            }
          </ul>
        </aside>
        <main className="main-content">
          <h2>{selectedTool.label}</h2>
          <ToolArea tool={selectedTool} />
        </main>
        <aside className="notes">
          <h2>Results</h2>
          <p>This is where your prompts, dice results, or oracle results will appear.</p>
        </aside>
      </div>
    </div>
  );
};

export default Emulator;