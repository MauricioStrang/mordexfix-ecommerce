import SelectButton from "@/components/selectButton/selectButton";
import styles from "./test.module.css"


const TestPage = () =>{
    return(
        <div className={styles.container}>
            <h1>This is Test Page</h1>
            <SelectButton/>
        </div>
    )
}


export default TestPage;