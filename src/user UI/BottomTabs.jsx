import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CakeIcon from '@material-ui/icons/Cake';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function TabPanel(props) {
 
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        style={{overflowY: 'scroll',height: '77vh'}}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    Height: '100%',
    overflowY: 'hidden',
    position: 'absolute',
    bottom: 0,
    top: 100,
    left: 0,
    right: 0,
},
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <TabPanel  value={value} index={0}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium cumque est perspiciatis in sit non animi ratione impedit harum modi aliquam possimus omnis eveniet debitis libero corporis atque architecto autem a, officiis amet consequuntur? Obcaecati minus at atque architecto veniam magnam deserunt veritatis dignissimos tenetur corrupti commodi, praesentium nisi porro totam neque nulla dolore? Quisquam autem magnam nostrum aperiam explicabo aliquam sed excepturi, modi sunt laboriosam, reiciendis quas sint earum! Veniam obcaecati iste, laborum minima aperiam perspiciatis eveniet quis in porro, voluptates, ullam sed nihil delectus dolore possimus! Accusamus blanditiis odio quas repudiandae similique. Distinctio est atque laborum voluptates odit vel obcaecati maiores asperiores, ipsa amet voluptatem quidem quisquam nam modi nostrum laboriosam deserunt officia? Totam reiciendis omnis debitis itaque hic sequi magnam fugiat culpa. Et cupiditate ducimus dolores libero neque voluptas ipsa exercitationem nam praesentium numquam, reprehenderit fugit enim, quia pariatur quis aperiam aliquid vitae inventore labore assumenda repudiandae quos impedit. Cumque molestias quisquam quam impedit maxime. Error harum eum voluptates cumque, similique exercitationem, fuga eligendi mollitia minus corporis iusto aut, aperiam quasi? Labore dicta ullam ad error voluptate, exercitationem tempore dignissimos, quae natus, alias voluptas quisquam veritatis! Minus omnis similique neque ex laboriosam ab, reiciendis est deleniti ad! Exercitationem odit est delectus ipsam ratione! Quod obcaecati esse laborum reiciendis unde natus sunt repellat. Non repudiandae quae provident dolore ab totam sequi laboriosam, culpa maxime officia quidem accusamus molestiae aut inventore. Atque optio nisi non! Iste inventore fuga autem eius repellat aliquam fugiat quo. Adipisci accusantium culpa modi voluptates totam libero, tempore fuga tempora magnam quaerat repellendus possimus doloribus maiores voluptatum cupiditate accusamus perferendis numquam neque nulla minus magni eum odit. Incidunt vero dignissimos qui eos, minus dolorum! Corporis cumque error minus, ducimus ea excepturi harum nam. Consequatur voluptatem nobis maiores numquam, nemo dolor, iste repudiandae deleniti ut omnis id. Ex natus exercitationem, unde praesentium enim delectus quod assumenda saepe. Consequatur, est cumque unde nihil quia omnis nam ducimus repudiandae nostrum perspiciatis consequuntur provident nesciunt laborum suscipit! Voluptate in, odit ratione eum, aperiam labore impedit, consequuntur debitis eveniet incidunt quasi. Nam quo explicabo velit ipsa itaque quod reprehenderit qui, ullam doloribus hic rerum perspiciatis fugiat, natus, ut dolore! Nihil eaque illo eveniet quasi expedita, rerum et, enim sapiente debitis quo maxime? Error officiis maiores est ducimus consectetur, blanditiis commodi magni quia suscipit deserunt, sed perferendis mollitia? Unde obcaecati blanditiis cum ea eum aliquam a eos. Voluptatibus adipisci ab veniam odio modi, praesentium in expedita? Magnam dicta, asperiores tempora iure repudiandae quos a ratione vero impedit ab voluptate officiis non consectetur expedita rerum deserunt nam nisi quia harum doloribus dolores ipsa! Velit aut asperiores autem qui neque alias voluptas voluptatem dolores, quam vitae? Repellendus excepturi accusantium eos vero porro temporibus doloribus quas debitis quisquam ullam quidem, harum exercitationem laudantium molestias, incidunt, magni ea et sint unde libero consequatur. Atque quisquam, tempore unde non consequatur perspiciatis magnam provident illo, inventore quaerat nulla eos nam minima adipisci officiis cumque voluptatem in officia voluptatibus deleniti, labore vel maxime eveniet amet. Possimus laudantium repellendus aspernatur maxime, nobis sapiente doloremque amet delectus saepe consequuntur neque vel, perferendis facere minus iste asperiores animi est maiores reiciendis? Ipsam dicta consequatur enim, vero inventore accusamus quidem quam harum velit neque maxime veritatis minima! Amet unde perferendis explicabo, laboriosam vitae in nostrum repudiandae. Ipsum cum et inventore, hic non dolore excepturi temporibus accusantium dolorum eum voluptatum similique ea voluptates dignissimos corporis iusto at dicta, asperiores, ad doloribus! Soluta sit atque neque modi nihil vero explicabo numquam quae perferendis optio culpa dicta, nam ab vel laboriosam quis id totam deserunt ea consequatur in? Accusamus inventore reprehenderit quia neque recusandae alias nihil enim. Voluptas quasi repudiandae omnis suscipit consequuntur voluptatem debitis cum vitae. Perferendis, et animi provident iure autem dolorum qui nemo sit vero pariatur deserunt veritatis quisquam quam? Voluptatibus at optio nobis hic expedita deserunt, neque perspiciatis enim incidunt tenetur quos tempora reprehenderit corrupti maiores minima consequatur. Facilis, alias repellat amet facere eos optio explicabo, asperiores assumenda dolorem saepe nostrum porro similique reprehenderit libero recusandae! Excepturi molestiae corrupti omnis, qui eum quaerat voluptatibus quis, dolore facilis assumenda voluptatem ratione, nobis nostrum impedit distinctio explicabo quod! Distinctio at suscipit ducimus eum recusandae itaque nobis id quidem, quasi, corporis quae nihil numquam impedit vitae excepturi rerum doloremque dicta animi necessitatibus nesciunt vel. Quos blanditiis tempora quisquam ut optio aut fuga provident minima architecto voluptatum consectetur nemo voluptatem quaerat vel, molestiae aspernatur consequatur enim! Ex quisquam corporis aspernatur nostrum. Ab quos at deleniti fugit reiciendis dolorem eligendi dignissimos ex eius dolor accusantium molestias excepturi hic, perferendis a maiores, numquam tempore corporis voluptas harum facilis doloremque natus non quas! Et placeat dolor quam asperiores quos vel cupiditate, aliquid rem esse, impedit voluptas similique magnam repellendus quaerat, tenetur veritatis numquam autem voluptatum obcaecati ab quia earum! Necessitatibus nihil aspernatur alias aperiam dolores voluptatibus dolorum officiis vitae excepturi. Nihil, fuga deleniti. Officiis rerum accusamus a magni recusandae molestiae ducimus, nihil soluta, optio temporibus beatae quis fuga. Praesentium vero doloremque libero? Modi praesentium excepturi quia aspernatur est nulla, beatae eos obcaecati eius consectetur a ratione dolor minus ipsa inventore accusantium quas dolore officiis! Accusantium tenetur officiis vel vitae quam nobis. Veritatis obcaecati debitis ut, voluptas harum dolores nulla quaerat aperiam alias, officia dicta tempore impedit ullam quasi qui! Quod iure cum vitae labore laborum eaque corrupti veniam, ducimus quibusdam, earum suscipit illum, mollitia ratione. Mollitia, quas placeat nam deleniti, ipsa, porro nesciunt nemo tempora iure earum quo cumque expedita reiciendis eaque omnis voluptates aliquam delectus harum neque aut repellendus. Maiores recusandae nisi nam. Explicabo, nisi voluptatem quas repellat, rerum nemo debitis beatae, sunt odit quos quae itaque? Iste libero accusamus itaque exercitationem possimus ipsam iusto minus modi, recusandae ducimus neque iure eum, corrupti hic id ex reprehenderit. Iusto animi iure amet, atque laborum commodi ullam ducimus laudantium quae. Corporis non ex praesentium culpa libero porro magni, vero harum, fugiat corrupti, mollitia ad quia officiis eum? Quis facere quaerat reiciendis incidunt minima, quae quod harum accusamus dolor debitis reprehenderit id ea ullam ducimus perspiciatis sequi. Enim, suscipit.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Birthday
      </TabPanel>
      <TabPanel value={value} index={2}>
        Corporate
      </TabPanel>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<FavoriteIcon />} label="WEDDING" {...a11yProps(0)}/>
        <Tab icon={<CakeIcon />} label="BIRTHDAY" {...a11yProps(1)}/>
        <Tab icon={<ThumbUpIcon />} label="CORPORATE" {...a11yProps(2)}/>
      </Tabs>
    </Paper>
  );
}
