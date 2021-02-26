<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faReddit, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faReddit)
library.add(faFacebook)
library.add(faTwitter)

export default {
  name: 'fa-icon',
  ...FontAwesomeIcon
}
</script>
