import Link from "next/link";

type TagProps = {
  id: string;
};

const Tag = (props: TagProps) => {
  return (
    <li className="listItem">
      <Link href="/item/" as={`/item/${props.id}`}>
        <a>{props.id}</a>
      </Link>
      <style jsx>{`
        .listItem {
          list-style: none;
          margin: 1em;
          padding: 1em;
          -webkit-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
          -moz-box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
        }

        .listItem:hover {
          -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.5);
          -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.5);
          box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.5);
        }

        a {
          text-decoration: none;
          color: #000000;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </li>
  );
};

export default Tag;
