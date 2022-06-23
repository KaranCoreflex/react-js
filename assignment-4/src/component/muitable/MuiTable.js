import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, getSingleCountry } from "../../features/countrySlice";
import MUIDataTable from "mui-datatables";
import {
  CircularProgress,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  const countries = useSelector((state) => state.country.country);
  const { singleCountry, loading } = useSelector((state) => state.country);
  const [expandedRow, setExpandedRow] = useState([]);
  const [indexofExpaned, setIndexofExpaned] = useState([]);
  const [swapCol, setSwapCol] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountry());
    // paginateData(1)
  }, [dispatch]);
  // console.log("countries",countries);

  // console.log("loading",loading)
  const columns = [
    {
      name: "name.common",
      label: "Country Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "region",
      label: "region",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "population",
      label: "Population",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "capital",
      label: "Capital",
      options: {
        filter: true,
        sort: true,
        customBodyRender:(capital=> capital? capital : "No Capital")
      },
    },
  ];

  useEffect(() => {
    return setExpandedRow((prev) => [...prev, singleCountry]);
  }, [singleCountry]);
  // console.log(expandedRow);
  const options = {
    filter: true,
    filterType: "dropdown",
    expandableRows: true,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    enableNestedDataAccess: ".",

    onRowClick: (rowData, rowMeta) => {
      const findIndex = indexofExpaned.findIndex(
        (value) => value.dataIndex === rowMeta.dataIndex
      );

      // check value is availble or not. if available don't featch
      if (!expandedRow[findIndex]) {
        dispatch(getSingleCountry(rowData[0]));
      }

      //avoid dublicate value
      setExpandedRow((prev) => {
        return prev.filter((country) => country?.name?.common !== rowData[0]);
      });
    },

    // rowsExpanded: [0, 1],
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => {
      setIndexofExpaned(allExpanded);
      // console.log("allExpanded",allExpanded)
    },

    // console.log( curExpanded),
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      // console.log("rowMeta",rowMeta);
      const index = indexofExpaned.findIndex(
        (value) => value.dataIndex === rowMeta.dataIndex
      );
      // {country.currencies && Object.keys(country?.currencies).map((key)=>(
      //     <span key={country.currencies[key]?.name}>{country.currencies[key]?.name} </span>
      // ))}
      const currancies =
        expandedRow[index + 1]?.currencies &&
        Object.keys(expandedRow[index + 1]?.currencies).map((key) => {
          return expandedRow[index + 1]?.currencies[key]?.name;
        });

      const languages =
        expandedRow[index + 1]?.languages &&
        Object.keys(expandedRow[index + 1]?.languages).map((lang) => {
          return expandedRow[index + 1]?.languages[lang];
        });

      return loading ? (
        <CircularProgress style={{ marginLeft: "20" }} />
      ) : (
        <TableRow>
          <TableCell colSpan={colSpan}>
            Official Name:-{" "}
            {expandedRow[index + 1] && expandedRow[index + 1]?.name?.official}
            <br />
            Region:- {expandedRow[index + 1] &&
              expandedRow[index + 1]?.region}{" "}
            <br />
            Population:-{" "}
            {expandedRow[index + 1] && expandedRow[index + 1]?.population}{" "}
            <br />
            Capital:-{" "}
            {expandedRow[index + 1] && expandedRow[index + 1]?.capital} <br />
            Currencies:- {currancies} <br />
            Languages:- {languages} <br />
          </TableCell>
        </TableRow>
      );
    },

    searchPlaceholder: "Your Custom Search Placeholder",
    customSearch: (searchQuery, currentRow, columns) => {
      let isFound = false;
      // console.log("columns",columns[2])
    //   if (searchQuery.length > 1) {
    //     currentRow.forEach((col, index) => {
    //       if (
    //         
    //         (col?.toString().toLowerCase().indexOf(searchQuery) === 0 ||
    //           col?.toString().toUpperCase().indexOf(searchQuery) === 0 ||
    //           col?.toString().indexOf(searchQuery) === 0)
    //       ) {
    //         isFound = true;
    //         setSwapCol(true);
    //       }
    //       if (index === 2 && col?.toString().indexOf(searchQuery) === 0) {
    //         setSwapCol(false);
    //         isFound = true;
    //       }
    //     });
    //   } else if (searchQuery.length < 1) {
    //     setSwapCol(true);
    //   }
    //   return isFound; 
        if (searchQuery.length < 2) {
            setSwapCol(true);
        }
        if (
            (currentRow[0]?.toString().toLowerCase().indexOf(searchQuery) === 0 ||
            currentRow[0]?.toString().toUpperCase().indexOf(searchQuery) === 0 ||
            currentRow[0]?.toString().indexOf(searchQuery) === 0)
        ) {
            isFound = true;
            setSwapCol(true);
        }
        if (currentRow[2]?.toString().indexOf(searchQuery) === 0) {
            setSwapCol(false);
            isFound = true;
        }
        return isFound  
    },
    columnOrder: swapCol ? [0, 1, 2, 3] : [2, 0, 1, 3],
  };
//   console.log("swapcol", swapCol);
  return (
    <div>
      {countries.length > 1 && (
        <MUIDataTable
          title={"Country List"}
          data={countries}
          columns={columns}
          options={options}
        />
      )}
    </div>
  );
};
