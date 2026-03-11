import { GitHubCalendar } from "react-github-calendar";

function GithubStats() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
        GitHub Activity
      </h2>

      <p className="text-gray-600 dark:text-gray-300 mb-10">
        My coding activity and contributions on GitHub
      </p>

      <div className="flex justify-center overflow-x-auto px-4">
        <GitHubCalendar
          username="vishalpandey055"
          blockSize={15}
          blockMargin={5}
          fontSize={14}
        />
      </div>
    </section>
  );
}

export default GithubStats;
