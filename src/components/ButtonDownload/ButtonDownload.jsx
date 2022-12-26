import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Link } from "./style";


function ButtonDownload({ download, href, text, color, backgroundColor }) {
  return (
    <Link download={download} href={href} color={color}>
      {text} <IoCloudDownloadOutline />
    </Link>
  );
}

export default ButtonDownload;
