
import './Form.css'

function Form () {

    function formAction (event) {
        event.preventDefault();
        const $ = event.target.form;
        let inputs = [];

        for (let i = 0; i < $.length-2; i++) {
            if ($[i].value === "") {
                alert('Введіть значення у всі поля вводу');
                inputs = [];
                break;
            } else {
                inputs.push($[i]);
            }
        }
        inputs.forEach(element => {
            console.log(`${element.type}: ${element.value}`);
            element.value = "";
        });
    }

    return (
        <>
            <form>
                <label htmlFor="text">Text</label>
                <input type="text" name="text" />
                <label htmlFor="num">Число</label>
                <input name="num" type="number" />
                <input onClick={(e)=>formAction(e)} type="submit" value="Відобразити в консолі" className='submit' />
                <input onClick={console.clear} type="button" value="Clear console" />
            </form>
        </>
    )
}

export default Form
