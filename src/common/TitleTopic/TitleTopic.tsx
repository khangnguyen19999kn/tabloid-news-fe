import { Link } from "react-router-dom";

interface ITitleTopicProps {
  title: string;
  underline?: boolean;
  topicSlug?: string;
  textColor?: string;
}
export default function TitleTopic({
  title,
  underline = false,
  topicSlug,
  textColor = "text-black",
}: ITitleTopicProps) {
  return (
    <>
      {topicSlug ? (
        <Link className="flex cursor-pointer group" to={topicSlug}>
          <h1
            className="text-xl font-extrabold text-red-700 mr-1
  "
          >
            /
          </h1>
          <h1
            className={`${textColor} text-xl font-bold group-hover:text-blue-400`}
          >
            {title.toUpperCase()}
          </h1>
        </Link>
      ) : (
        <div className="flex">
          <h1
            className="text-xl font-extrabold text-red-700 mr-1
"
          >
            /
          </h1>
          <h1 className={`${textColor} text-xl font-bold`}>
            {title.toUpperCase()}{" "}
          </h1>
        </div>
      )}
      {underline && <hr className="my-3" />}
    </>
  );
}
