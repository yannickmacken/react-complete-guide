import "./ExpensesFilter.css"

function ExpensesFilter(props) {

    function selectYearFilterHandler(event) {

        // Run on change method on parent component to filter by year.
        props.onChangeFilter(event.target.value);
        console.log("in expenses filter", event.target.value);
    };

    return (
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.selectedYear} onChange={selectYearFilterHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
  };
  
export default ExpensesFilter;