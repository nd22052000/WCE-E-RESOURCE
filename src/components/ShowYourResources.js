import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./ShowYourResources.css";
import axios from "axios";

function DisplayReso(props) {
  if (props.data.driveLink) {
    return (
      <div>
        <p style={{ display: "inline-block" }}>
          {props.data.resourceName + " : "}
        </p>
        <a href={props.data.driveLink.webViewLink}>view</a>
        <a href={props.data.driveLink.webContentLink}>Download</a>
        <p>{props.data.author.name}</p>
        <p>{props.data.timestamp}</p>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <p>{props.data.resourceName}</p>
        <p>{props.data.externalLink.description}</p>
        <a href={props.data.externalLink.link}>Link</a>
        <p>{props.data.author.name}</p>
        <p>{props.data.timestamp}</p>
        <hr />
      </div>
    );
  }
}

// -------------------------------------------------------------------

function ShowYourResourcesCode(props) {
  console.log(props);

  const resources = [
    {
      srNO: "1",
      resourceName: props.data.resourceName,
      view: <a href={props.data.driveLink.webViewLink}>View Link</a>,
      delete: "abc",
      download: <a href={props.data.driveLink.webContentLink}>Download Link</a>,
      date: props.data.timestamp,
      room: props.data.room
    }
  ];

  return (
    <div>
      <tr>
        <td style={{ textAlign: "center", width: "150px" }}>
          {resources[0].srNO}
        </td>
        <td
          style={{
            textAlign: "center",
            width: "300",
            textOverflow: "ellipsis",
            display: "inline-block",
            overflow: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {resources[0].resourceName}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].view}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].delete}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].download}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].date}
        </td>
        <td style={{ textAlign: "center", width: "500px" }}>
          {resources[0].room}
        </td>
      </tr>
    </div>
  );
}

// -------------------------------------------------------------------

function ShowYourResources() {
  const author = {
    name: "Harshal Kodgire",
    PRN: "2019BTECS00029",
    email: "a@b.com",
    username: "harshal.kodgire@walchand"
  };

  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/resources/users/" + author.username)
      .then((data) => {
        const RecievedResources = data.data;
        // console.log(data.data);

        // console.log(data.data[0].driveLink);

        for (let i = 0; i < RecievedResources.length; i++) {
          setArr((arr) =>
            arr.concat(<ShowYourResourcesCode data={RecievedResources[i]} />)
          );
        }

        //end
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="content ">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Resources uploaded by you :-
        </h2>
        <br />
        <table>
          <tr>
            <th style={{ textAlign: "center", width: "120px" }}>SrNo</th>
            <th style={{ textAlign: "center", width: "500px" }}>
              Resource Name
            </th>
            <th style={{ textAlign: "center", width: "500px" }}>View</th>
            <th style={{ textAlign: "center", width: "500px" }}>Delete</th>
            <th style={{ textAlign: "center", width: "500px" }}>Download</th>
            <th style={{ textAlign: "center", width: "500px" }}>Date</th>
            <th style={{ textAlign: "center", width: "500px" }}>Room</th>
          </tr>
        </table>
        <br />
        {/* <ShowYourResourcesCode />
        <ShowYourResourcesCode />
        <ShowYourResourcesCode /> */}
        {arr}
      </div>
    </div>
  );
}

export default ShowYourResources;

// function UploadResource() {
//   const [labelName, setLabelName] = useState("Upload Here");

//   return (
//     <div>
//       <Sidebar />
//       <div className="content">
//         {/* <div className="UploadResodiv1"> */}
//         <form>
//           <div className="UploadResodiv1">
//             <h3 style={{ textAlign: "center" }}>Select a file ...</h3>
//             <label
//               className="UploadResoLabel"
//               htmlFor="uploadButton"
//               // style={{ backgroundImage: "url(./upload2.png)" }}
//             >
//               {labelName}
//             </label>
//             <input
//               type="file"
//               hidden
//               onChange={(event) => {
//                 if (event.target.files[0].name)
//                   setLabelName(event.target.files[0].name);
//               }}
//               id="uploadButton"
//               className="UploadResoButton"
//             />
//             <br />
//           </div>
//           <div className="UploadResodiv2">
//             <label htmlFor="fileName">Enter Name for file : </label>
//             <input type="text" id="fileName" required />
//             <br />
//             <br />
//             <label>Select a room : </label>
//             <Select className="selectRoom" />
//             <br />
//             <br />
//             <button type="submit">Upload</button>
//           </div>
//         </form>
//         {/* </div> */}
//         {/* <br /> */}
//         <div style={{ textAlign: "center" }}>
//           <h3>Resources uploaded by you :-</h3>
//           <ul style={{ display: "inline-block" }}>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//             <li>Nikhil</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UploadResource;
