import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import blogImage from '../../../../public/images/blog1.png';
import BlogLayout from '../Home/components/Blog_layout';

const BlogDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  background: #B8D0ED;

`;

const BottomSection = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
`;

const LeftTop = styled.div`
  width: 40%;
`;

const RightTop = styled.div`
  margin-left: 10%;
  width: 60%;
`;

const LeftBottom = styled.div`
  width: 60%;
  margin-top: 50px;
`;

const RightBottom = styled.div`
  width: 10%;
  height: 50px;
  border: 1px solid #f0ecec;
  margin-left: 20%;
  padding: 20px;
  margin-top: 50px;
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  font-size: 52px;
  font-weight: bold;
  color: #032752;
`;

const PublishedDate = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  color: #F5746E;
  font-weight: bold;
`;

const BottomBlogTitle = styled.h2`
  font-size: 30px;
  color: #032752;
`;

const Description = styled.p`
  margin-top: 20px;
  line-height: 1.6;
  font-size: 16px;
  color: #535961;
  text-align: justify;
`;

const ShareIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;
  margin-top: 20px;
  cursor: pointer;
`;

const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const BlogDetail = () => {
  return (
    <BlogDetailContainer>
      <TopSection>
        <LeftTop>
          <BlogImage src={blogImage} alt="Blog Image" />
        </LeftTop>
        <RightTop>
          <PublishedDate>January 1, 2024</PublishedDate>
          <BlogTitle>VLaser-Assisted Surgical Procedures</BlogTitle>
        </RightTop>
      </TopSection>
      <BottomSection>
        <LeftBottom>
          <BottomBlogTitle>VLaser-Assisted Surgical Procedures</BottomBlogTitle>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat mollitia architecto, ab veniam exercitationem deleniti laboriosam illo maxime, aut harum ducimus quisquam ipsa dolorem provident error et odit molestias laudantium.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae, modi fuga placeat beatae itaque distinctio exercitationem fugit accusamus facilis vel amet temporibus ut enim saepe similique! Placeat, ut similique.
            Illo facere recusandae possimus error voluptates! Quo suscipit deleniti magnam dolore voluptas deserunt optio. Culpa dignissimos, nemo quam ab ipsum, odit necessitatibus iusto distinctio temporibus eaque deleniti. Ipsum, harum dolorem!
            Velit, repudiandae. Vel assumenda, doloribus illo, unde nemo consectetur ab, id eaque temporibus inventore iusto eligendi cum eius repudiandae ut. Rem corporis iste sint eveniet minima maxime enim perspiciatis reprehenderit.
            Unde, porro nulla! Delectus dolores, explicabo doloremque aperiam illo quo excepturi veniam et labore nesciunt soluta omnis harum optio natus facere voluptate, iure, adipisci voluptatum dolorum in iste! Obcaecati, porro.
            Laborum iusto excepturi officia ipsum dolore magnam nobis modi aut adipisci assumenda illo voluptas cupiditate quae vero eos earum atque minima explicabo quod, expedita perferendis, voluptatibus delectus culpa. Ipsa, suscipit.
            A suscipit sit temporibus saepe excepturi ex possimus eveniet laboriosam sunt enim, quisquam, officiis minus laborum in impedit vel sapiente culpa quasi repellendus asperiores maxime eaque. Earum, magni? Voluptatibus, omnis!
            Omnis quibusdam sunt dolores iure, laborum molestiae! Accusamus eius id, saepe incidunt obcaecati ad perferendis velit? Facere rerum laborum temporibus cum incidunt deleniti, pariatur nostrum, eaque quidem dolore tempora dolorum?
            Ipsa quasi totam quidem expedita doloribus obcaecati, animi quo velit quis eligendi autem, sed nobis rerum deleniti facere quisquam unde, minima doloremque minus laudantium. Iste culpa eveniet nobis deserunt blanditiis?
            Odit quidem est error aliquid voluptas minima perferendis nostrum ex, sequi porro rem voluptatem impedit fuga optio fugiat, maiores provident tenetur ratione! Eius optio quia veniam excepturi, rem molestiae architecto?
            Sunt nesciunt quod aut nemo impedit, iure rem harum fugit eius obcaecati perferendis qui blanditiis beatae porro eaque saepe delectus, tenetur sed voluptate optio! Tenetur alias amet velit aspernatur id.
            Saepe quae magnam, autem, ullam quas officia nesciunt quia minima fuga quasi quos placeat voluptates molestiae itaque dolor consequatur perferendis recusandae ab eligendi at maxime. Explicabo sit cumque officia repellendus!
            Vitae, perspiciatis! Ex voluptate, iusto nulla non sapiente ad, ipsa voluptatem quam incidunt blanditiis magnam alias dolore eveniet tempora quo aperiam aut eligendi? Totam sint perferendis possimus delectus a repudiandae.
            Sunt ea voluptatum nisi quos quaerat aliquam, perspiciatis perferendis mollitia animi at officiis debitis nobis, magni ut molestiae eum eligendi laboriosam corrupti illo, minus in porro aperiam. Recusandae, illum perferendis.
            Praesentium possimus quod corrupti labore ad esse, distinctio sint. Blanditiis id eius quod exercitationem inventore ex similique obcaecati quae? Odio neque voluptatum sit nihil qui? Dolorem labore veritatis accusantium! Facere?
            Voluptas id, fugit vitae consequuntur odit rerum dolor asperiores adipisci. Consectetur accusantium, architecto itaque velit quasi molestias debitis voluptatem repellendus dolorem harum ipsam totam provident illum dignissimos fuga pariatur magni.
            Eaque asperiores, ipsum esse saepe officia numquam pariatur. Nostrum in esse ut dolores totam reiciendis est aut hic iste optio, veritatis pariatur quaerat quidem nemo, sapiente non officia fuga laboriosam!
            Numquam corporis illo ab debitis doloribus eligendi ipsam aperiam, magni optio! Iste iusto praesentium adipisci fuga non eum dicta, at labore molestias beatae aliquam sed dignissimos doloremque iure commodi eos.
            Animi doloribus repellat praesentium inventore, consequuntur velit, quos natus officia eligendi sapiente laudantium optio dolore placeat deleniti illum rem assumenda dolores officiis! Similique fugiat adipisci dolorem hic autem? Alias, fuga.
            Fuga quasi accusamus labore, eligendi odit, a veritatis ipsam non explicabo architecto molestiae illo, delectus atque nobis assumenda commodi? Laboriosam quasi aut dolore voluptatum doloremque. Quo ipsam exercitationem cum maiores.
            Mollitia nesciunt ipsum perferendis? Soluta architecto doloremque voluptates, dolorum, sequi voluptas laudantium deleniti nam error debitis, quas aspernatur commodi tempore explicabo rem obcaecati minus dolorem? Velit quas repellat libero. Rem!
            Eius delectus placeat voluptates quaerat necessitatibus odio rem tempore fuga? Quaerat aliquam eveniet perspiciatis consequatur odit laudantium minus autem. Unde ipsum cumque modi eveniet omnis, accusamus odit nam voluptates nisi!
            Aliquam optio magni voluptate nesciunt nulla, et ipsam veniam aut placeat. Molestiae, quia nam est, omnis repellendus temporibus veritatis aspernatur nostrum quo reprehenderit, quisquam dolorem impedit fugit consequuntur maiores fuga!
            Eligendi praesentium quisquam itaque qui doloribus placeat repudiandae aut magnam mollitia vero harum non animi atque unde debitis perspiciatis sequi voluptate, possimus accusamus adipisci. Sed facilis in maiores aspernatur dolorum!
            Vitae nesciunt nostrum repellat, aspernatur tempora reiciendis quos vel quo illum quod nemo voluptas qui harum quis! Delectus quam veniam quae consequuntur ducimus iusto, optio a eaque corporis sequi hic!
            Delectus blanditiis deleniti, odio perferendis, atque excepturi, provident pariatur distinctio molestias explicabo voluptas sint laudantium nesciunt quis aspernatur neque dolore! Labore commodi ipsa harum quas expedita esse minima dolores assumenda!
            Quidem est quaerat fugiat eos quasi quam. Molestias est fugit quae nisi quam asperiores voluptatem dolore rem omnis, iste tempora ea! Nam ullam eius delectus, aut veritatis facilis ea enim.
            Provident, dignissimos in repudiandae officia maiores dicta quo veniam ex assumenda deserunt ea illum fugit quia. Minus pariatur eos, corporis error, amet totam nihil ullam perspiciatis, quae repudiandae eveniet suscipit?
            Odit quasi exercitationem rem. Cupiditate, blanditiis! Et, voluptatibus quos consectetur odio minus voluptatem ratione dolorem est esse quo rerum similique illum corrupti ea possimus nam delectus doloribus saepe praesentium fuga!
            Cum unde sit ipsum eius cupiditate vero repudiandae quidem saepe tenetur inventore dolorum consequatur tempora, incidunt voluptate sunt minima, explicabo sed placeat adipisci assumenda accusantium! Hic beatae ab consectetur molestias.
            Aperiam deserunt earum perferendis laboriosam eveniet, quod numquam in illo, architecto omnis quis maxime minus eaque dolores, fugiat voluptas sapiente. Placeat praesentium officia rerum quis quia eius ipsam laudantium aspernatur?
            Asperiores soluta ad dolor nostrum esse veniam corporis deserunt, adipisci harum corrupti nulla voluptate. Ab facere sint, aut consequuntur quo minus iusto sit nulla assumenda, quam accusamus voluptatibus. Porro, unde.
            Aliquid vero quo voluptatem corporis non sunt quae optio esse, alias laboriosam? Quibusdam ex quia, temporibus ut rem sapiente! Eum harum earum ex magnam saepe nam non velit ratione repudiandae?
            Nam, minima provident. Magni ipsa eaque quasi ullam ipsam minus exercitationem corrupti illo, reprehenderit id consectetur iure eius repudiandae deserunt excepturi optio. Assumenda adipisci nam sed illum incidunt maxime ipsam.
            Earum, facilis. Non enim iste necessitatibus modi quas quis, eius exercitationem fuga minus ipsa maxime unde et provident voluptatum labore, autem praesentium, a perspiciatis adipisci at. Aliquid hic adipisci eius!
            Atque incidunt eos animi ex, error qui aperiam nihil laboriosam, illum a possimus vel maxime, esse autem necessitatibus libero eum quisquam. Laudantium repellat odio odit optio! Velit aliquid itaque rem.
            Reiciendis quisquam libero eaque animi sit. Ullam, ea. Sit, laboriosam? Porro iure omnis exercitationem, at iusto consectetur aut mollitia eius, natus ipsa libero harum illo amet maxime odit quibusdam magni.
            Obcaecati, blanditiis consectetur? Dolore, animi, ut voluptate magni, et placeat commodi minima recusandae fuga aut id ipsum ab iusto corrupti dolorum. In ex laudantium aperiam odio non doloremque nihil sint!
            Vel voluptate vero ea eius similique, repellat quisquam dolorum incidunt, quas sunt doloremque rem corrupti delectus aut magnam quos et veniam voluptates quia ipsam dignissimos quidem! Nemo aliquid illo itaque!
            Quis aspernatur nulla repellat minus placeat at id magni voluptas adipisci impedit! Delectus, cum! Quisquam maxime quas facilis quasi minus placeat cum deserunt minima culpa, necessitatibus dolor repudiandae, est porro!
            Nemo illum ducimus dolores quaerat hic id. Error cum commodi eligendi similique consequatur quibusdam nisi libero asperiores accusantium dolor magnam debitis provident doloribus, velit odio voluptatum illum unde dignissimos ipsum!
            Magnam odio minima pariatur, aliquid dolores rem quasi quos doloremque reiciendis ut qui libero quae repudiandae assumenda nisi quaerat quis numquam mollitia molestias rerum exercitationem iure. Quo at perferendis ipsam.
            Dolorum repellat accusamus impedit aliquid ipsum necessitatibus, culpa voluptatibus numquam molestias voluptates quasi ea, sint nulla eligendi voluptate similique exercitationem, neque recusandae quis mollitia? Vel deleniti a nisi necessitatibus iure.
            Explicabo aliquam qui neque culpa suscipit? Optio nostrum repellat in vitae obcaecati alias, commodi illum esse autem facilis. Dignissimos officia commodi fugiat officiis ab dolorem temporibus laudantium. Asperiores, et ea.
            Aliquam eius natus qui sunt dolorem! Fugiat, veritatis, reiciendis pariatur deserunt voluptate quae dolores nemo praesentium ipsam debitis, libero provident iure sit sapiente quis. Provident officia debitis blanditiis distinctio quibusdam?
            Saepe ullam placeat consequuntur, blanditiis laborum reiciendis explicabo culpa, enim quaerat tenetur aliquam expedita perferendis exercitationem consequatur ratione odit repudiandae eum atque dicta nemo. Maxime a illum officiis possimus nemo.
            Consectetur sequi sint recusandae sapiente accusantium dolorum, quis hic in ratione aliquid voluptatem necessitatibus eligendi dolore vero cupiditate molestias provident voluptatibus, cumque doloremque! In dignissimos ea deleniti et placeat eveniet?
            At dolore nam libero nisi sint ea consequuntur aut, quae, magnam minus assumenda! Rerum aliquam nisi est consectetur nostrum excepturi beatae unde nobis. Veniam natus dolor at tempore libero. Aliquid?
            Quas nemo deleniti, autem ex, velit quos nisi dolores, illo omnis corrupti pariatur magni. Asperiores tenetur corporis esse quisquam doloribus necessitatibus fuga, aspernatur incidunt dolores autem dicta expedita et illo!
            Voluptates dolorem mollitia recusandae dolore itaque voluptatum quis soluta minus nobis saepe nisi sit neque in, aliquid officiis quasi! Earum incidunt suscipit est tenetur in explicabo vitae cumque nesciunt dolores.
            Officia est explicabo vitae sequi a laudantium quos, aperiam earum error libero aliquam distinctio incidunt ipsam voluptatibus odit dolorum molestias tenetur. Nobis ipsum, natus odio unde similique rerum ex tempora?
          </Description>
        </LeftBottom>
        <RightBottom>
          <h3>Share This:</h3>
          <ShareIcons>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </ShareIcons>
        </RightBottom>
      </BottomSection>
      <BlogLayout />
    </BlogDetailContainer>
  );
};

export default BlogDetail;
