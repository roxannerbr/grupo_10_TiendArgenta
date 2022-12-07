let db = require('../../database/models')
const { Op } = require("sequelize");

module.exports = {
    paginacion: async (req, res) => {
        const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
        try {
            let {orderBy, orderDirect, page, size, ...updateQuery} = req.query;
            const order = orderBy ? orderBy : 'id';
            const direction = orderDirect ? orderDirect : 'ASC';

            for(let key in updateQuery) {
                if(key == 'titulo' || key == 'categoriasId' || key == 'subCategoriasId') {
                    if(updateQuery[key] == null || updateQuery[key].trim().length == 0) {
                        delete updateQuery[key]
                    } else {
                        if( key == 'titulo') {
                            updateQuery[key] = {[Op.substring]: req.query.titulo.trim()}
                        }
                    }
                } else {
                    delete updateQuery[key]
                    url.searchParams.delete(key)
                }
            }
            const getPagination = (page, size) => {
                const limit = size ? +size : 10
                const offset = page ? (page-1) * limit : 0
                return  {limit, offset}
            }
            const {limit, offset} = getPagination(page, size);
            //return res.send(data)
            getPageData = (data, page, limit) => {
                const { count, rows: result } = data;
                const pages = Math.ceil(count / limit);
                const currentPage = page ? +page : 1;

                if (currentPage > pages) {
                    throw new SyntaxError();
                } else {
                    let next_page = ""
                    let previous_page = ""
                    if (url.searchParams.has('page') ) {
                        if(!url.searchParams.has('size')) {
                            url.searchParams.set('size', limit)
                        }
                        if (currentPage == 1) {
                            url.searchParams.set('page', (currentPage + 1))
                            next_page = url.href
                        } else {
                            url.searchParams.set('page', (currentPage - 1))
                            previous_page = url.href
                            url.searchParams.set('page', (currentPage + 1))
                            next_page = url.href
                        }
                    } else {
                        url.searchParams.set('page', (currentPage + 1));
                        url.searchParams.set('size', limit)
                        next_page = url.href
                    }
                    const next = (currentPage == pages) ? null : next_page;
                    const previous = (currentPage == 1) ? null : previous_page;
                    return { count, pages, previous, next, result }
                }
            }
            let data = await db.Productos.findAndCountAll({
                where: updateQuery,
                order: [[order, direction]],
                include : [
                    {
                        association : 'categoria',
                        attributes: ['nombre']
                    },
                    {
                        association : 'subcategoria',
                        attributes: ['nombre']
                    }
                ],
                limit,
                offset
            })

            const { count, pages, previous, next, result } = await getPageData(data, page, limit)
            return res.status(200).json({
                count,
                pages,
                previous,
                next,
                result
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'UPPS! Lo siento, ha ocurrido un error!'
            })
        }
    }

}