import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SuiBox from "../../../Components/SuiBox";
import SuiAvatar from "../../../Components/SuiAvatar";
import UserLayout from "../../../Layouts/User";
import { wacService } from "../../../Services/";
import { FaCog } from "react-icons/fa";

import moment from "moment";

import "./WAC.scss";

function WAC() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("setup");

  const [websites, setWebsites] = useState([]);

  useEffect(() => {
    getWebsite();
  }, []);

  const getWebsite = () => {
    const query = { page: "0", limit: 12 };
    const headers = { "x-access-token": localStorage.getItem("token") };

    wacService.find(query, headers).then((res) => {
      const { data } = res;

      setWebsites(data);
    });
  };

  return (
    <UserLayout header={false}>
      <div id="wac-user">
        <div className="row">
          {websites &&
            websites.map((website, i) => (
              <div className="col-sm-3" key={i}>
                <SuiBox
                  bgColor="white"
                  borderRadius="xl"
                  className="wac-user-card"
                >
                  <div className="wac-card-time">
                    {moment(website.createdAt).fromNow()}
                  </div>
                  <div className="wac-card-setting">
                    <FaCog />
                  </div>
                  <div className="py-3">
                    <div className="d-flex justify-content-center">
                      {website.icon ? (
                        <img
                          src={website.icon}
                          className="img-fluid"
                          height="60px"
                          width="60px"
                        />
                      ) : (
                        <SuiAvatar
                          name={website.domain.toUpperCase()}
                          variant="rounded"
                          bgColor="error"
                          size="lg"
                          className="wac-icon-text"
                          shadow="md"
                        />
                      )}
                    </div>
                    <div className="wac-user-link">
                      <a
                        href={`//${website.domain}`}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {website.domain}
                      </a>
                    </div>
                  </div>
                </SuiBox>
              </div>
            ))}
        </div>
      </div>
    </UserLayout>
  );
}

export default WAC;
