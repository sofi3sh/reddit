import React from 'react'
import "./postHome.css"

export const PostHome = () => {
  return (
    <div>
      <div class="container_post_home">
        <div class="header_post_home">
          <img alt="Subreddit icon" height="40" src="https://storage.googleapis.com/a1aa/image/FJfN2rvLLTyiI6VC1jiJXreMA6CZfHb78fspLBuGZMB0o3LPB.jpg" width="40"/>
          <span class="subreddit">
          r/reddit_ukr
          </span>
          <span class="time">
          • 2 days ago
          </span>
          <span class="tag">
          Popular in your country
          </span>
          <button class="join-button">
          Join
          </button>
          <i class="fas fa-ellipsis-h more-options">
          </i>
        </div>
        <div class="title">
          СКІЛЬКИ ТРЕБА ЗАРОБЛЯТИ У 20?
        </div>
        <div class="content">
          Привіт, я студент денної форми навчання, і як ви зрозуміли - мені 20. Вже декілька місяців стабільно заробляю від 900 до 1200$ за місяць. І мені здавалося, що це багато, адже більшість моїх знайомих заробляє менше та і в цілому це чиста робота (не офіс і тд), де я плачу податки державі. Але мені завжди було мало, при тому що закривав усі свої базові потреби (квартира, одяг, смачна їжа, комуналка) так ще й допомагав дівчині своїй. Але тут натрапив на пост, де люди говорять, що в 19-22 мають власну квартиру, автівку, заробляють від 1500$ стабільно. А я і мріяти не можу про таке. Здається, що це мій максимум. Потім ще дівчина почала робити якісь...
        </div>
        <div class="actions">
          <div class="action">
          <i class="fas fa-arrow-up">
          </i>
          <span>
            107
          </span>
          </div>
          <div class="action">
          <i class="fas fa-comment">
          </i>
          <span>
            220
          </span>
          </div>
          <div class="action">
          <i class="fas fa-share">
          </i>
          <span>
            Share
          </span>
          </div>
        </div>
        </div>
    </div>
  )
}
