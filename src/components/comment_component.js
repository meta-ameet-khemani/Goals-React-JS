import { useState } from 'react';
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './comment_component.css';

function CommentComponent() {
    let commentIndex = 0;

    let comments = [
        {
        'title': 'First Title',
        'description': 'First Description',
        },
        {
        'title': 'Second Title',
        'description': 'Second Description',
        },
        {
        'title': 'Third Title',
        'description': 'Third Description',
        },
    ];

    const [commentDetails, setComment] = useState(comments[commentIndex]);

    function changeComment(index) {
        commentIndex = index;
        setComment(comments[index]);
    }

    return(
        <table className="outer-table">
        <tbody>
          <tr>
            <th>
              Comment Box
            </th>
          </tr>
          <tr>
            <td>
              <table className="comment-list-table">
                <tbody>
                  { comments && comments.map((comment, index) =>
                    <tr key={index}>
                      <td>
                        <div onClick={() => changeComment(index)}>
                          Comment {index + 1} 
                          <span>
                            <FontAwesomeIcon icon={faCaretRight} />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ) }
                </tbody>
              </table>
            </td>
            <td>
              <table className="comment-details-table">
                <tbody>
                  <tr>
                    <td>
                      { commentDetails['title'] }
                    </td>
                  </tr>
                  <tr className="comment-details-description-row">
                    <td>
                      { commentDetails['description'] }
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
}

export default CommentComponent;