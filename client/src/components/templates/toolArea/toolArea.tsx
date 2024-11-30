import YnOracle from "../YnOracle/YnOracle";
import NvTable from "../NvTable/NvTable";
import DiceRoller from "../DiceRoller/DiceRoller";

interface ToolAreaProps {
    tool: {
        id: string,
        label: string,
    };
}

const ToolArea = ({tool}: ToolAreaProps) => {
    switch(tool.id) {
        case 'ynoracle':
            return (<YnOracle />)
        case 'nvtable':
            return <NvTable />
        case 'diceroller':
            return <DiceRoller />
        default:
            return <p>To get started, select a tool from the list</p>
    }
}

export default ToolArea;